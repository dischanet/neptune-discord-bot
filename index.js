const { Client } = require('klasa')
const { config, token } = require('./config')

class NeptuneClient extends Client {
  constructor (options) {
    super({ ...options })
  }
}

const client = new NeptuneClient(config)
client.login(token)
