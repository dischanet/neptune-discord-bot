const { Client } = require('klasa')
const { config, token } = require('./config')
const { MinAccAge, Mute } = require('./utils/GuildSchema/GuildDefaultSchema')

class NeptuneClient extends Client {
  constructor (options) {
    super({ ...options, MinAccAge, Mute })
  }
}

const client = new NeptuneClient(config)
client.login(token)
