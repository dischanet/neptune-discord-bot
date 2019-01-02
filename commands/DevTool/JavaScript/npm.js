const { Command } = require('klasa')
const { MessageEmbed } = require('discord.js')
const request = require('request')
const moment = require('moment')

module.exports = class extends Command {
  constructor (...args) {
    super(...args, {
      requiredPermissions: ['EMBED_LINKS'],
      description: 'Responds with information on an NPM package.',
      usage: '<query:str>'
    })
  }

  async run (message, [query]) {
    request(`https://registry.npmjs.com/${encodeURIComponent(query)}`, { method: 'GET', json: true }, (e, r, b) => {
      if (b['error']) return message.sendMessage(`Could not find any results.`)
      if (b['time']['unpublished']) return message.sendMessage('This package no longer exists.')
      const version = b['dist-tags']['latest']
      return message.sendEmbed(new MessageEmbed()
        .setColor(0xCB0000)
        .setAuthor('NPM', 'https://i.imgur.com/ErKf5Y0.png', 'https://www.npmjs.com/')
        .setTitle(b['name'])
        .setURL(`https://www.npmjs.com/package/${query}`)
        .setDescription(b['description'] || 'No description.')
        .addField('Version', version, true)
        .addField('License', b['license'] || 'None', true)
        .addField('Author', b['author']['name'] || '???', true)
        .addField('Creation', moment.utc(b['time']['created']).format('MM/DD/YYYY h:mm A'), true)
        .addField('Modification', moment.utc(b['time']['modified']).format('MM/DD/YYYY h:mm A'), true)
      )
    })
  }
}
