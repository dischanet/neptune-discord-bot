const { Command, KlasaMessage } = require('klasa')
const { MessageAttachment } = require('discord.js')
const YuigahamaError = require('../../../lib/error/YuigahamaError')
const fetch = require('node-fetch')

/**
 * @extends Command
 */
class Dog extends Command {
  constructor (...args) {
    super(...args, {
      requiredPermissions: ['ATTACH_FILES'],
      description: '犬の画像を送信します。',
      extendedHelp: 'No extended help available.'
    })
  }

  /**
   * @param {KlasaMessage} message
   */
  async run (message) {
    const body = await fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(body => body.message)
      .catch(() => null)
    if (!body) return new YuigahamaError('Request failed')

    return message.send(new MessageAttachment(body))
  }
}

module.exports = Dog
