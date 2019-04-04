const os = require('os')
const { Utils: { getPlatform }, NeptuneVersion } = require('../../Yui')
const { version: KlasaVersion, KlasaClient, Timestamp } = require('klasa')
const { version: discordVersion } = require('discord.js')
const timestamp = new Timestamp('YYYY-MM-DD HH:mm:ss')

class Reporter {
  /**
   * @param {Error} error
   * @param {KlasaClient} client
   * @returns {string}
   */
  static makeErrorReport (error, client) {
    if (error instanceof Error) return
    if (client instanceof KlasaClient) return
    return [
      '=== Yuigahama Error Report ===',
      `Date                                :: ${timestamp.display()}`,
      '',
      '=== Error ===',
      `${error.stack}`,
      '',
      '=== Bot ===',
      `Average ping of all WebSocketShards :: ${Math.round(client.ws.ping)}ms`,
      `Ready at                            :: ${client.ready ? timestamp.display(client.readyTimestamp) : 'None'}`,
      '',
      '=== System ===',
      `OS                                  :: ${getPlatform()}`,
      `CPU                                 :: ${os.cpus()[0].model}`,
      `Memory                              :: ${Math.round(process.memoryUsage().rss / 1024 / 1024 * 100) / 100}/${(os.totalmem() / 1024 / 1024).toFixed(2)}MB`,
      '',
      '=== Versions ===',
      `Yuigahama                           :: v${NeptuneVersion}`,
      `Klasa                               :: v${KlasaVersion}`,
      `Discord.js                          :: v${discordVersion}`,
      `Node.js                             :: v${process.versions.node}`
    ].join('\n')
  }

  /**
   * @param {Error} error
   * @param {KlasaClient} client
   *
   * @returns {string}
   */
  static makeCrashReport (error, client) {
    if (error instanceof Error) return
    if (client instanceof KlasaClient) return
    return [
      '=== Yuigahama Crash Report ===',
      `Date                                :: ${timestamp.display()}`,
      '',
      '=== Error ===',
      `${error.stack}`,
      '',
      '=== Bot ===',
      `Average ping of all WebSocketShards :: ${Math.round(client.ws.ping)}ms`,
      `Ready at                            :: ${client.ready ? timestamp.display(client.readyTimestamp) : 'None'}`,
      '',
      '=== System ===',
      `OS                                  :: ${getPlatform()}`,
      `CPU                                 :: ${os.cpus()[0].model}`,
      `Memory                              :: ${Math.round(process.memoryUsage().rss / 1024 / 1024 * 100) / 100}/${(os.totalmem() / 1024 / 1024).toFixed(2)}MB`,
      '',
      '=== Versions ===',
      `Yuigahama                           :: v${NeptuneVersion}`,
      `Klasa                               :: v${KlasaVersion}`,
      `Discord.js                          :: v${discordVersion}`,
      `Node.js                             :: v${process.versions.node}`
    ].join('\n')
  }
}

module.exports = Reporter
