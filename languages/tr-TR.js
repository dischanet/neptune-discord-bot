// Copyright (c) 2017-2018 dirigeants. All rights reserved. MIT license.
const { Language, util } = require('klasa')

module.exports = class extends Language {
  constructor (...args) {
    super(...args)
    this.language = {
      DEFAULT: (key) => `${key} henüz tr-TR için çevirilmemiş.`,
      DEFAULT_LANGUAGE: 'Varsayılan Dil',
      SETTING_GATEWAY_EXPECTS_GUILD: 'Parametre <Guild> için bir Guild veya Guild Objesi vermeniz gerekiyor.',
      SETTING_GATEWAY_VALUE_FOR_KEY_NOEXT: (data, key) => `${data} için ${key} anahtarı yok..`,
      SETTING_GATEWAY_VALUE_FOR_KEY_ALREXT: (data, key) => `${data} zaten ${key} içinde var.`,
      SETTING_GATEWAY_SPECIFY_VALUE: 'Filtre veya değer vermeniz gerekiyor.',
      SETTING_GATEWAY_KEY_NOT_ARRAY: (key) => `${key} Array değil.`,
      SETTING_GATEWAY_KEY_NOEXT: (key) => `${key} veri şemasında bulunamadı.`,
      SETTING_GATEWAY_INVALID_TYPE: 'parametrenin add veya remove olması gerekiyor.',
      RESOLVER_INVALID_PIECE: (name, piece) => `${name} herhangi bir ${piece} olması gerekiyor.`,
      RESOLVER_INVALID_MESSAGE: (name) => `${name} geçerli bir mesaj idsi olması gerekiyor`,
      RESOLVER_INVALID_USER: (name) => `${name} geçerli bir mention veya kullanıcı idsi olması gerekiyor.`,
      RESOLVER_INVALID_MEMBER: (name) => `${name} geçerli bir mention veya kullanıcı idsi olması gerekiyor.`,
      RESOLVER_INVALID_CHANNEL: (name) => `${name} geçerli bir kanal etiketi veya kanal idsi olması gerekiyor.`,
      RESOLVER_INVALID_GUILD: (name) => `${name} geçerli bir guild idsi olması gerekiyor`,
      RESOLVER_INVALID_ROLE: (name) => `${name} geçerli bir rol idsi veya mentionu olması gerekiyor.`,
      RESOLVER_INVALID_LITERAL: (name) => `${name}: Olması beklenen bir değer değil`,
      RESOLVER_INVALID_BOOL: (name) => `${name} true yada false olması gerekiyor`,
      RESOLVER_INVALID_INT: (name) => `${name} bir tamsayı olması gerekiyor.`,
      RESOLVER_INVALID_FLOAT: (name) => `${name} bir sayı olması gerekiyor`,
      RESOLVER_INVALID_REGEX_MATCH: (name, pattern) => `${name} \`${pattern}\` regex paterni ile eşleşmiyor.`,
      RESOLVER_INVALID_URL: (name) => `${name} geçerli bir url olması gerekiyor.`,
      RESOLVER_STRING_SUFFIX: ' karakterler',
      RESOLVER_MINMAX_EXACTLY: (name, min, suffix) => `${name} tamamen ${min}${suffix} şeklinde olması gerekiyor.`,
      RESOLVER_MINMAX_BOTH: (name, min, max, suffix) => `${name}: ${min} ve ${max}${suffix} arasında olması gerekiyor.`,
      RESOLVER_MINMAX_MIN: (name, min, suffix) => `${name}: ${min}${suffix}'den-'dan büyük olması gerekiyor.`,
      RESOLVER_MINMAX_MAX: (name, max, suffix) => `${name}: ${max}${suffix}'den-'dan küçük olması gerekiyor.`,
      COMMANDMESSAGE_MISSING: 'Bir veya birden fazla argüman eksik.',
      COMMANDMESSAGE_MISSING_REQUIRED: (name) => `${name} zorunlu bir argüman.`,
      COMMANDMESSAGE_MISSING_OPTIONALS: (possibles) => `Zorunlu argümanlardan birisi eksik: (${possibles})`,
      COMMANDMESSAGE_NOMATCH: (possibles) => `Seçiminiz olası değerlerden biri değil: (${possibles})`,
      MONITOR_COMMAND_HANDLER_REPROMPT: (tag, error, time) => `${tag} | **${error}** | Mesaja geçerli bir argüman ile yanıt vermek için **${time}** saniyeniz var . iptal etmek için **"ABORT"** yazın.`, // eslint-disable-line max-len
      MONITOR_COMMAND_HANDLER_ABORTED: 'İptal edildi.',
      INHIBITOR_COOLDOWN: (remaining) => `Komutu daha yeni kullanıdınız. ${remaining} saniye içerisinde tekrar deneyin.`,
      INHIBITOR_DISABLED: 'Bu komut şu anlık kapatılmış.',
      INHIBITOR_MISSING_BOT_PERMS: (missing) => `Gerekli **${missing}** yetkisine sahip değilim.`,
      INHIBITOR_PERMISSIONS: 'Bu komutu kullanmaya yetkin yok.',
      INHIBITOR_REQUIRED_SETTINGS: (settings) => `Bu sunucu **${settings.join(', ')}** ayar${settings.length > 1 ? 'larına' : ''} sahip değil. Bu yüzden bu komut çalıştırılamaz.`,
      INHIBITOR_RUNIN: (types) => `Bu komut sadece ${types} kanallarında kullanılabilir.`,
      INHIBITOR_RUNIN_NONE: (name) => `${name} komut herhangi bir kanalda kullanılmak için ayarlanmamış.`,
      COMMAND_UNLOAD: (type, name) => `✅ Geçici olarak hafızadan silindi ${type}: ${name}`,
      COMMAND_TRANSFER_ERROR: '❌ Bu dosya çoktan transfer edildi yada hiç varolmadı.',
      COMMAND_TRANSFER_SUCCESS: (type, name) => `✅ Başarıyla transfer edildi ${type}: ${name}`,
      COMMAND_TRANSFER_FAILED: (type, name) => `${type}: ${name} transferi başarısız. Lütfen Konsola bakın.`,
      COMMAND_RELOAD: (type, name) => `✅ Yeniden yüklendi ${type}: ${name}`,
      COMMAND_RELOAD_ALL: (type) => `✅ ${type} tümü yeniden yüklendi.`,
      COMMAND_REBOOT: 'Yeniden başlatılıyor...',
      COMMAND_PING: 'Ping?',
      COMMAND_PINGPONG: (diff, ping) => `Pong! (Dolaşım: ${diff}ms. Kaynak: ${ping}ms.)`,
      COMMAND_INVITE_SELFBOT: 'Neden selfbot için invite linkine ihtiyaç duyasın ki!?!?',
      COMMAND_INVITE: (client) => [
        `${client.user.username} guildinize eklemek için:`,
        `<${client.invite}>`,
        util.codeBlock('', [
          'Yukarıdaki bağlantı tüm komutları kullanmak için istediği minimum yetkiyle oluşturulmuştur.',
          'Tüm yetkilerin her sunucu için doğru olmadığını biliyorum, bu yüzden yetkilerden herhangi birini almaktan sakınma.',
          'Eğer botun herhangi bir komutu gerçekleştirmeye yetkisi yoksa sizi bilgilendirecektir.'
        ].join(' ')),
        'Eğer herhangi bir hata ile karşılaşırsanız <https://github.com/dirigeants/klasa>. adresine bildirin.'
      ],
      COMMAND_INFO: [
        'Klasa bir \'tak-çalıştır\' kütüphanesidir ve Discord.js kitaplığı ile yazılmıştır.',
        'Kodun çoğu modüler buda geliştiricilere Klasa\'yı istedikleri gibi değiştirmelerine izin verir.',
        '',
        'Klasa\'nın bazı özellikleri:',
        '• 🐇💨 ES2017 desteği ile hızlı yüklenme zamanları (`async`/`await`)',
        '• 🎚🎛 Sunucu başına ayarlar özelliği ve bu özellik yazdığınız kodla genişletilebilir.',
        '• 💬 Değiştirilebilir komut sistemi otomatik kullanım belirleme özelliği ile yeniden yüklemesi kolay ve indirilebilir modüller.',
        '• 👀 Mesajlara tıpkı bir event gibi (Küfür filtresi, Spam koruması, vb.) bakabilen "Monitörler" ',
        '• ⛔ Komutları belirlenen parametrelere göre kullanımlarını engelleyen (Yetkiler, Karaliste, vb.) "İnhibitörler"',
        '• 🗄 Dış veritabanlarına bağlanmak için kullanılabilen "Sağlayıcılar"',
        '• ✅ Başarılı bir komuttan sonra çalışabilen "Sonlayıcılar"',
        '• ➕ Pasif çalışan "Esneticiler". Discord.js sınfılarından özellik veya method eklemek için kullanılır.',
        '• 🌐 Botunuzu yerelleştirmek için kullanabileceğiniz "Diller".',
        '• ⏲ Zamanlayabileceğiniz ve istediğiniz zaman tekrar ettirebileceğiniz "Görevler".',
        '',
        'Herkese hitap eden ve %100 düzenlenebilir bir framework yaptığımızı umuyoruz. Sıklıkla güncelliyoruz ve bugları kapatmaya çalışıyoruz.',
        'Eğer ilgilendiyseniz bize https://klasa.js.org adresinden ulaşabilirsiniz'
      ],
      COMMAND_HELP_DM: '📥 | Kullanabileceğiniz komutların listesi DM olarak gönderildi.',
      COMMAND_HELP_NODM: '❌ | DM alımınız bu sunucu için kapalı, bu yüzden DM olarak gönderemedim.',
      COMMAND_ENABLE: (type, name) => `+ ${type}: ${name} başarıyla aktifleştirildi.`,
      COMMAND_DISABLE: (type, name) => `+ ${type}: ${name} başarıyla kapatıldı`,
      COMMAND_DISABLE_WARN: 'Bunu kapattığın hiç bir komutu açamayacağın için kapatmak istemezsin.',
      COMMAND_CONF_NOKEY: 'Bir anahtar sağlaman gerekiyor.',
      COMMAND_CONF_NOVALUE: 'Bir değer sağlaman gerekiyor.',
      COMMAND_CONF_ADDED: (value, key) => `\`${value}\` başarıyla **${key}** anahtarına eklendi.`,
      COMMAND_CONF_UPDATED: (key, response) => `**${key}** başarıyla \`${response}\` ile güncellendi`,
      COMMAND_CONF_KEY_NOT_ARRAY: 'Bu anahtar array tipinde değil. \'reset\' kullanın.',
      COMMAND_CONF_REMOVE: (value, key) => `\`${value}\` başarıyla **${key}** anahtarından silindi.`,
      COMMAND_CONF_GET_NOEXT: (key) => `**${key}** anahtarı hiç varolmamış gibi.`,
      COMMAND_CONF_GET: (key, value) => `**${key}** anahtarı için şu anki değer: \`${value}\``,
      COMMAND_CONF_RESET: (key, response) => `**${key}** anahtarı \`${response}\` şeklinde sıfırlandı.`
    }
  }
}
