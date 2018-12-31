const { Command } = require('klasa')
const { MessageEmbed } = require('discord.js')
const request = require('request')

module.exports = class extends Command {
  constructor (...args) {
    super(...args, {
      enabled: true,
      runIn: ['text', 'dm', 'group'],
      description: 'PocketMine-MPの最新ビルドや安定ビルドのダウンロードURLを送信します。',
      requiredPermissions: ['EMBED_LINKS'],
      subcommands: true
    })
  }

  async run (message) {
    await request('https://update.pmmp.io/api', {
      method: 'GET',
      json: true
    }, (e, r, b) => {
      const Embed = new MessageEmbed()
        .setColor(8311585)
        .setTitle('PocketMine-MP (stable)')
        .setDescription(`
        **PHP**: ${b['php_version']}
        **Build Number**: ${b['build_number']}
        **API**: ${b['base_version']}
        **Minecraft Version**: ${b['mcpe_version']}
        `)
        .addField('Download PocketMine-MP.phar', `${b['details_url']}artifact/PocketMine-MP.phar`, true)
        .addField('Download DevTools.phar', `${b['details_url']}artifact/DevTools.phar`)
        .setAuthor(message.author.tag, message.author.avatarURL() || 'https://cdn.discordapp.com/embed/avatars/0.png')
        .setFooter('pmmp/PocketMine-MP', 'https://avatars1.githubusercontent.com/u/22548559?s=200&v=4')
      return message.sendEmbed(Embed)
    })
  }
}
