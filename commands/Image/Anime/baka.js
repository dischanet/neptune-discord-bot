const { Command } = require('klasa')
const { MessageAttachment } = require('discord.js')
const fetch = require('node-fetch')

module.exports = class extends Command {
  constructor (...args) {
    super(...args, {
      requiredPermissions: ['ATTACH_FILES', 'SEND_MESSAGES'],
      cooldown: 30,
      description: ''
    })
  }

  async run (message) {
    const file = await fetch('https://nekos.life/api/v2/img/baka').then(res => res.json())
    return message.send(new MessageAttachment(file['url']))
  }
}
