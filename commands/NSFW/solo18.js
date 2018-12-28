const { Command } = require('klasa')
const { MessageAttachment } = require('discord.js')
const fetch = require('node-fetch')

module.exports = class extends Command {
  constructor (...args) {
    super(...args, {
      requiredPermissions: ['ATTACH_FILES', 'SEND_MESSAGES'],
      cooldown: 15,
      nsfw: true,
      description: language => language.get('COMMAND_SOLO18_DESCRIPTION')
    })
  }

  async run (message) {
    if (message.flags.gif) {
      let gif = fetch('https://nekos.life/api/v2/img/solog').then(res => res.json())
      return message.send(new MessageAttachment(gif['url']))
    }
    const file = await fetch('https://nekos.life/api/v2/img/solo').then(res => res.json())
    return message.send(new MessageAttachment(file['url']))
  }
}
