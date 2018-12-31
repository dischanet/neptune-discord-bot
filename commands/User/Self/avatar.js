const { Command } = require('klasa')
const { MessageAttachment } = require('discord.js')

module.exports = class extends Command {
  constructor (...args) {
    super(...args, {
      description: language => language.get('COMMAND_AVATAR_DESCRIPTION'),
      usage: '[member:membername]'
    })
  }

  async run (message, [member]) {
    if (!member) return message.send(new MessageAttachment(message.author.displayAvatarURL()))
    return message.send(new MessageAttachment(member.user.displayAvatarURL()))
  }
}
