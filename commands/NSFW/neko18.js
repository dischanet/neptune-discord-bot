const { Command } = require('klasa')
const { MessageAttachment } = require('discord.js')
const fetch = require('node-fetch')

module.exports = class extends Command {
  constructor (...args) {
    super(...args, {
      requiredPermissions: ['ATTACH_FILES', 'SEND_MESSAGES'],
      cooldown: 15,
      nsfw: true,
      description: language => language.get('COMMAND_NEKO18_DESCRIPTION')
    })
  }

  async run (message) {
    if ('gif' in message.flags) {
      let gif = await fetch('https://nekos.life/api/v2/img/nsfw_neko_gif').then(res => res.json())
      return message.send(new MessageAttachment(gif['url']))
    }
    const file = await fetch('https://nekos.life/api/v2/img/lewd').then(res => res.json())
    return message.send(new MessageAttachment(file['url']))
  }
}
