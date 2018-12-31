const { Command } = require('klasa')
const { MessageEmbed } = require('discord.js')
const request = require('request')

module.exports = class extends Command {
  constructor (...args) {
    super(...args, {
      requiredPermissions: ['EMBED_LINKS'],
      description: 'Searches MDN for your query.',
      usage: '<query:str>'
    })
  }

  async run (message, [query]) {
    await request('https://developer.mozilla.org/en-US/search.json', {
      qs: {
        q: query.replace(/#/g, '.prototype.'),
        highlight: false
      },
      method: 'GET',
      json: true
    }, (e, r, b) => {
      const data = b['documents'][0]
      if (!data) { return message.sendMessage(`Information matching \`${query}\` could not be found.`) }
      const embed = new MessageEmbed()
        .setColor(0x066FAD)
        .setAuthor('Mozilla Developer Network', 'https://i.imgur.com/DFGXabG.png', 'https://developer.mozilla.org/')
        .setURL(data['url'])
        .setTitle(data['title'])
        .setDescription(data['excerpt'])
      return message.sendEmbed(embed)
    })
  }
}
