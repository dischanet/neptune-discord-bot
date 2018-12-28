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
      COMMAND_PAT_DESCRIPTION: 'Show pat gif',
      COMMAND_FEED_DESCRIPTION: 'Show feed gif',
      COMMAND_SLAP_DESCRIPTION: 'Show slap gif',
      COMMAND_CUDDLE_DESCRIPTION: 'Show cuddle gif',
      COMMAND_POKE_DESCRIPTION: 'Show poke gif',
      COMMAND_TICKLE_DESCRIPTION: 'Show tickle gif',
      COMMAND_NEKO18_DESCRIPTION: 'Show neko gif or image (R18)',
      COMMAND_ANAL18_DESCRIPTION: 'Show anal gif (R18)',
      COMMAND_AVATARGENERATOR18_DESCRIPTION: 'Get the image for the icon. (R18)',
      COMMAND_BLOWJOB18_DESCRIPTION: 'Show blowjob gif or image (R18)',
      COMMAND_BOOBS18_DESCRIPTION: 'Show boobs gif or image (R18)',
      COMMAND_CLASSIC18_DESCRIPTION: 'Show classic gif (R18)',
      COMMAND_CUM18_DESCRIPTION: 'Show cum gif or image (R18)',
      COMMAND_FEET18_DESCRIPTION: 'Show feet gif or image (R18)',
      COMMAND_FEMDOM18_DESCRIPTION: 'Show frmdom image (R18)',
      COMMAND_FOX18_DESCRIPTION: 'Show fox gif or image (R18)',
      COMMAND_FUTANARI18_DESCRIPTION: 'Show futanari image (R18)',
      COMMAND_HENTAI18_DESCRIPTION: 'Show hentai git or image (R18)',
      COMMAND_KUNI18_DESCRIPTION: 'Show kuni gif (R18)',
      COMMAND_PUSSY18_DESCRIPTION: 'Show pussy gif or image (R18)',
      COMMAND_PWANK18_DESCRIPTION: 'Show pwank gif or image (R18)',
      COMMAND_SOLO18_DESCRIPTION: 'Show solo gif or image (R18)',
      COMMAND_SPANK18_DESCRIPTION: 'Show spank gif image (R18)',
      COMMAND_TRAP18_DESCRIPTION: 'Show trap image (R18)',
      COMMAND_YURI18_DESCRIPTION: 'Show yuri gif or image (R18)'
    }
  }
}
