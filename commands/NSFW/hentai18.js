const { Command } = require('klasa')
const { MessageAttachment } = require('discord.js')
const fetch = require('node-fetch')

module.exports = class extends Command {
  constructor (...args) {
    super(...args, {
      requiredPermissions: ['ATTACH_FILES', 'SEND_MESSAGES'],
      cooldown: 15,
      nsfw: true,
      description: language => language.get('COMMAND_HENTAI18_DESCRIPTION')
    })
  }

  async run (message) {
    if (message.flags.gif) {
      let gif = await fetch('https://nekos.life/api/v2/img/Random_hentai_gif').then(res => res.json())
      return message.send(new MessageAttachment(gif['url']))
    } else if (message.flags.slightly) {
      let slightly = await fetch('https://nekos.life/api/v2/img/ero').then(res => res.json())
      return message.send(new MessageAttachment(slightly['url']))
    }
    let file = await fetch('https://nekos.life/api/v2/img/hentai').then(res => res.json())
    return message.send(new MessageAttachment(file['url']))
  }
}
