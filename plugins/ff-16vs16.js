import axios from 'axios'

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `✨ *Gengar Bot*\n\n⚠️ Por favor, ingresa el horario del reto.\n*Ejemplo:* ${usedPrefix + command} 8:00 PM`

  const encabezados = [
    "⚡ Gengar Bot| BATTLE 16x16",
    "🚀 GENGAR SYSTEM | RETO ACTIVADO",
    "✨ WHOIS DEVELOPER - VS"
  ]
  
  // Puedes cambiar estas URLs por imágenes que prefieras para el mini-miniatura (vcard)
  const imagenes = [
    "https://files.catbox.moe/2l8ad9.jpeg",
    "https://files.catbox.moe/2l8ad9.jpeg"
  ]

  const titulo = encabezados[Math.floor(Math.random() * encabezados.length)]
  const img = imagenes[Math.floor(Math.random() * imagenes.length)]

  const thumbnail = Buffer.from(
    (await axios.get(img, { responseType: 'arraybuffer'})).data
  )

  // Mensaje tipo Orden para mayor estética
  const izumi = {
    key: {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast"
    },
    message: {
      orderMessage: {
        itemCount: 16,
        message: titulo,
        footerText: "GENGAR BOT• BY WHOIS",
        thumbnail: thumbnail,
        surface: 2,
        sellerJid: "0@s.whatsapp.net"
      }
    }
  }

  await conn.sendMessage(m.chat, {
    image: { url: 'https://files.catbox.moe/1j784p.jpg'}, // Imagen principal del reto
    caption: `╭╾━━━━╼ 〔 ⚡ 〕 ╾━━━━╼╮
┃  🔥 *16 VS 16 | GENGAR BOT*
┃
┃ ⏳ *ʜᴏʀᴀʀɪᴏ:*
┃ 🇵🇪 Peru: ${args[0]}
┃
┃ 🎮 *ᴍᴏᴅᴀʟɪᴅᴀᴅ:*
┃ 👥 *ᴊᴜɢᴀᴅᴏʀᴇs:*
┃
┃ 🏆 *ᴇsᴄᴜᴀᴅʀᴀ 1:*
┃   👑 • 
┃   🥷🏻 • 
┃   🥷🏻 • 
┃   🥷🏻 • 
┃
┃ 🏆 *ᴇsᴄᴜᴀᴅʀᴀ 2:*
┃   👑 • 
┃   🥷🏻 • 
┃   🥷🏻 • 
┃   🥷🏻 • 
┃
┃ 🏆 *ᴇsᴄᴜᴀᴅʀᴀ 3:*
┃   👑 • 
┃   🥷🏻 • 
┃   🥷🏻 • 
┃   🥷🏻 • 
┃
┃ 🏆 *ᴇsᴄᴜᴀᴅʀᴀ 4:*
┃   👑 • 
┃   🥷🏻 • 
┃   🥷🏻 • 
┃   🥷🏻 • 
┃
┃ 🔄 *sᴜᴘʟᴇɴᴛᴇs:*
┃   🥷🏻 • 
┃   🥷🏻 • 
╰╾━━━━╼ 〔 🚀 〕 ╾━━━━╼╯
*By Whois Developers • GENGAR BOT*`,
    mentions: []
  }, { quoted: izumi })
}

handler.help = ['16vs16']
handler.tags = ['freefire']
handler.command = /^(vs16|16vs16)$/i
handler.group = true

export default handler
