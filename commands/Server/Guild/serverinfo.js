const { Command } = require('klasa')
const { MessageEmbed } = require('discord.js')

module.exports = class extends Command {
  constructor (...args) {
    super(...args, {
      runIn: ['text'],
      requiredPermissions: ['EMBED_LINKS', 'VIEW_CHANNEL', 'SEND_MESSAGES'],
      description: language => language.get('COMMAND_SERVERINFO_DESCRIPTION')
    })
  }

  async run (message) {
    return message.sendEmbed(new MessageEmbed()
      .setThumbnail(message.guild.iconURL())
      .setAuthor(message.author.tag, message.author.displayAvatarURL())
      .setTitle(message.guild.name)
      .addField('ID', message.guild.id, true)
      .addField('Member', message.guild.memberCount, true)
      .addField('Channels', message.guild.channels.size, true)
      .addField('Emojis', message.guild.emojis.size, true)
      .addField('Roles', message.guild.roles.size, true)
      .addField('Region', message.guild.region, true)
      .setFooter(message.guild.owner.user.tag, message.guild.owner.user.displayAvatarURL())
      .setTimestamp(message.guild.createdTimestamp)
    )
  }
}
