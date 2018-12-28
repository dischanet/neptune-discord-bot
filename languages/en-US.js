const { Language } = require('klasa')

module.exports = class extends Language {
  constructor (...args) {
    super(...args)
    this.language = {
      COMMAND_LANGUAGE_DESCRIPTION: 'Language settings',
      COMMAND_LANGUAGE_SAME: 'It has already been set for that language.',
      COMMAND_LANGUAGE_UPDATE: 'Changed the language setting.',
      COMMAND_AVATAR_DESCRIPTION: 'Show avatars of other users or show your avatar.',
      COMMAND_SERVERINFO_DESCRIPTION: 'Show server information.',
      COMMAND_AVATARGENERATOR_DESCRIPTION: 'Get the image for the icon.',
      COMMAND_DOG_DESCRIPTION: 'Display the image of the dog.',
      COMMAND_CAT_DESCRIPTION: 'Display the image of the cat.',
      COMMAND_SMUG_DESCRIPTION: 'Show Anime gif',
      COMMAND_NEKO_DESCRIPTION: 'Show neko girl gif or image',
      COMMAND_FOXGIRL_DESCRIPTION: 'Show fox girl image',
      COMMAND_LIZARD_DESCRIPTION: 'Display the image of the lizard.',
      COMMAND_KISS_DESCRIPTION: 'Show kiss gif',
      COMMAND_HUG_DESCRIPTION: 'Show hug gif',
      COMMAND_PAT_DESCRIPTION: 'Show pat gif'
    }
  }
}
