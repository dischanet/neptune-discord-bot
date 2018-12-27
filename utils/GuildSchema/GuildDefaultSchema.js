const { KlasaClient } = require('klasa')

module.exports.MinAccAge = KlasaClient.defaultGuildSchema
  .add('minAccAge', 'integer', { default: 1800000 })

module.exports.Mute = KlasaClient.defaultGuildSchema
  .add('roles', schema => schema
    .add('muted', 'role')
  )