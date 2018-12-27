const { Command } = require('klasa')

module.exports = class extends Command {
  constructor (...args) {
    super(...args, {
      runIn: ['text'],
      requiredPermissions: ['SEND_MESSAGES'],
      aliases: ['lang'],
      cooldown: 5,
      permissionLevel: 6,
      description: language => language.get('COMMAND_LANGUAGE_DESCRIPTION'),
      usage: '<ja|us|de|es|fr|it|ro|tr>',
      usageDelim: ' ',
      subcommands: true
    })
  }

  async ja (message) {
    if (message.guild.settings.language === 'ja-JP') throw message.language.get('COMMAND_LANGUAGE_SAME')
    await message.guild.settings.update('language', 'ja-JP')
    return message.sendMessage(`${message.language.get('COMMAND_LANGUAGE_UPDATE')} \`ja_JP\``)
  }

  async en (message) {
    if (message.guild.settings.language === 'en-US') throw message.language.get('COMMAND_LANGUAGE_SAME')
    await message.guild.settings.update('language', 'en-US')
    return message.sendMessage(`${message.language.get('COMMAND_LANGUAGE_UPDATE')} \`en_US\``)
  }

  async de (message) {
    if (message.guild.settings.language === 'de-DE') throw message.language.get('COMMAND_LANGUAGE_SAME')
    await message.guild.settings.update('language', 'de-DE')
    return message.sendMessage(`${message.language.get('COMMAND_LANGUAGE_UPDATE')} \`de-DE\``)
  }

  async es (message) {
    if (message.guild.settings.language === 'es-ES') throw message.language.get('COMMAND_LANGUAGE_SAME')
    await message.guild.settings.update('language', 'es-ES')
    return message.sendMessage(`${message.language.get('COMMAND_LANGUAGE_UPDATE')} \`es-ES\``)
  }

  async fr (message) {
    if (message.guild.settings.language === 'fr-FR') throw message.language.get('COMMAND_LANGUAGE_SAME')
    await message.guild.settings.update('language', 'fr-FR')
    return message.sendMessage(`${message.language.get('COMMAND_LANGUAGE_UPDATE')} \`fr-FR\``)
  }

  async it (message) {
    if (message.guild.settings.language === 'it-IT') throw message.language.get('COMMAND_LANGUAGE_SAME')
    await message.guild.settings.update('language', 'it-IT')
    return message.sendMessage(`${message.language.get('COMMAND_LANGUAGE_UPDATE')} \`it-IT\``)
  }

  async ro (message) {
    if (message.guild.settings.language === 'ro-RO') throw message.language.get('COMMAND_LANGUAGE_SAME')
    await message.guild.settings.update('language', 'ro-RO')
    return message.sendMessage(`${message.language.get('COMMAND_LANGUAGE_UPDATE')} \`ro-RO\``)
  }

  async tr (message) {
    if (message.guild.settings.language === 'tr-TR') throw message.language.get('COMMAND_LANGUAGE_SAME')
    await message.guild.settings.update('language', 'tr-TR')
    return message.sendMessage(`${message.language.get('COMMAND_LANGUAGE_UPDATE')} \`tr-TR\``)
  }
}