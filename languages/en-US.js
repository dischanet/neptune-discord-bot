const { Language } = require('klasa')

module.exports = class extends Language {

  constructor (...args) {
    super(...args)
    this.language = {
      COMMAND_LANGUAGE_DESCRIPTION: 'Language settings',
      COMMAND_LANGUAGE_SAME: 'It has already been set for that language.',
      COMMAND_LANGUAGE_UPDATE: 'Changed the language setting.',
    }
  }
}