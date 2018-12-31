const { Command } = require('klasa')
const request = require('request')

module.exports = class extends Command {
  constructor (...args) {
    super(...args, {
      aliases: ['djs'],
      requiredPermissions: ['EMBED_LINKS'],
      description: 'Searches the Discord.js docs for your query.',
      usage: '<main|commando|rpc> <branch:string> <query:string>',
      usageDelim: ' ',
      subcommands: true
    })
  }

  async main (message, [branch, query]) {
    this.search(message, query, 'main', branch)
  }

  async commando (message, [branch, query]) {
    this.search(message, query, 'commando', branch)
  }

  async rpc (message, [branch, query]) {
    this.search(message, query, 'rpc', branch)
  }

  async search (message, query, type = 'main', branch = 'stable') {
    await request(`https://djsdocs.sorta.moe/${type}/${branch}/embed`, {
      qs: {
        q: query
      },
      method: 'GET',
      json: true
    }, (e, r, b) => {
      if (b.status) return message.sendMessage(b.message)
      if (!b) return message.sendMessage(`[${type}:${branch}] Information matching \`${query}\` could not be found.`)
      return message.sendEmbed(b)
    })
  }
}
