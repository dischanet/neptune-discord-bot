const { Command } = require('klasa')
const { MessageAttachment } = require('discord.js')

module.exports = class extends Command {
  constructor (...args) {
    super(...args, {
      description: '',
      usage: '[user:username]'
    })
  }

  async run (message, [user = message.author]) {
    return message.send(new MessageAttachment(user.displayAvatarURL() || 'https://media.discordapp.net/attachments/527895872365789185/527895889692327936/1024px-No_image_available.png'))
  }
}