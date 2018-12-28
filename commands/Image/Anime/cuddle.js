const { Command } = require('klasa')
const { MessageAttachment } = require('discord.js')
const fetch = require('node-fetch')

module.exports = class extends Command {
  constructor (...args) {
    super(...args, {
      requiredPermissions: ['ATTACH_FILES', 'SEND_MESSAGES'],
      cooldown: 15,
      description: language => language.get('COMMAND_CUDDLE_DESCRIPTION')
    })
  }

  async run (message) {
    const file = await fetch('https://nekos.life/api/v2/img/cuddle').then(res => res.json())
    return message.send(new MessageAttachment(file['url']))
  }
}
