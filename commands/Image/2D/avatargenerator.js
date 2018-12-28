const { Command } = require('klasa')
const { MessageAttachment } = require('discord.js')
const fetch = require('node-fetch')

module.exports = class extends Command {
  constructor (...args) {
    super(...args, {
      alias: ['avatargen'],
      requiredPermissions: ['ATTACH_FILES', 'SEND_MESSAGES'],
      cooldown: 30,
      description: ''
    })
  }

  async run (message) {
    if ('waifu' in message.flags) {
      let waifu = await fetch('https://nekos.life/api/v2/img/waifu').then(res => res.json())
      return message.send(new MessageAttachment(waifu['url']))
    }
    let avatar = await fetch('https://nekos.life/api/v2/img/avatar').then(res => res.json())
    return message.send(new MessageAttachment(avatar['url']))
  }
}
