require('dotenv').config()

const { Client } = require('klasa')
const DBLAPI = require('dblapi.js')

const client = new Client({
  prefix: 'n!',
  regexPrefix: /^neptune(@|!)/i,
  presence: { activity: { name: 'neptune!help', type: 'PLAYING' } },
  language: 'ja-JP',
  commandLogging: true,
  commandEditing: true
})

if ('DBL_TOKEN' in process.env) {
  const DBL = new DBLAPI(process.env.DBL_TOKEN, client)

  DBL.on('error', (error) => {
    client.emit('DblError', client, error)
  })

  DBL.on('posted', () => {
    client.emit('DblPosted', client)
  })
}

client.login(process.env.DISCORD_BOT_TOKEN)

module.exports = {
  Utils: require('./lib/util/utils'),
  Nekoslife: require('./lib/util/Nekolife')
}
