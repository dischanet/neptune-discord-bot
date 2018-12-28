const { Command } = require('klasa')
const { MessageAttachment } = require('discord.js')
const fetch = require('node-fetch')

module.exports = class extends Command {
  constructor (...args) {
    super(...args, {
      requiredPermissions: ['ATTACH_FILES', 'SEND_MESSAGES'],
      cooldown: 15,
      description: language => language.get('COMMAND_FOXGIRL_DESCRIPTION')
    })
  }

  async run (message) {
    if ('holo' in message.flags) {
      let holo = await fetch('https://nekos.life/api/v2/img/holo').then(res => res.json())
      return message.send(new MessageAttachment(holo['url']))
    }
    let foxgirl = await fetch('https://nekos.life/api/v2/img/fox_girl').then(res => res.json())
    return message.send(new MessageAttachment(foxgirl['url']))
  }
}
