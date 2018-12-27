const { Command } = require('klasa')
const { MessageAttachment } = require('discord.js')
const fetch = require('node-fetch')

module.exports = class extends Command {
  constructor (...args) {
    super (...args, {
      requiredPermissions: ['ATTACH_FILES', 'SEND_MESSAGES'],
      usageDelim: ' ',
      usage: '<tag:str>',
      cooldown: 15
    })
  }

  async run (message, [query]) {
    const r = await fetch(`https://konachan.com/post.json?tags=${encodeURIComponent(query)}+order%3Arandom+rating%3Asafe&limit=1`).then(res => res.json())
    if (r.length) {
      return message.send(new MessageAttachment(r[0]['file_url']))
    } else {
      await message.sendMessage('Not Found')
      return message.send(new MessageAttachment('https://konachan.com/assets/404.jpg'))
    }
  }
}