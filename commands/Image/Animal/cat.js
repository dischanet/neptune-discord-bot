const { Command } = require('klasa')
const { MessageAttachment } = require('discord.js')
const fetch = require('node-fetch')

module.exports = class extends Command {
  constructor (...args) {
    super(...args, {
      requiredPermissions: ['ATTACH_FILES', 'SEND_MESSAGES'],
      description: language => language.get('COMMAND_CAT_DESCRIPTION')
    })
  }

  async run (message) {
    const file = await fetch('http://aws.random.cat/meow').then(res => res.json())
    return message.send(new MessageAttachment(file['file']))
  }
}
