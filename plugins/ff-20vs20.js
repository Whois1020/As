import axios from 'axios'

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `✨ *GENGAR BOT*\n\n⚠️ Por favor, ingresa el horario del reto.\n*Ejemplo:* ${usedPrefix + command} 9:00 PM`

  // Mensaje citado tipo Izumi con imagen y título aleatorio
  const titulos = [
    "⚡ GENGAR BOT| ELITE 20x20",
    "🚀 GENGAR SYSTEM | GUERRA DE CLANES",
    "✨ WHOIS DEVELOPER | MAX BATTLE"
  ]
  const imagenes = [
    "https://files.catbox.moe/2l8ad9.jpeg",
    "https://files.catbox.moe/2l8ad9.jpeg"
  ]

  const titulo = titulos[Math.floor(Math.random() * titulos.length)]
  const imagen = imagenes[Math.floor(Math.random() * imagenes.length)]

  let thumbBuffer
  try {
    const res = await axios.get(imagen, { responseType: 'arraybuffer'})
    thumbBuffer = Buffer.from(res.data)
  } catch (e) {
    thumbBuffer = Buffer.alloc(0)
  }

  const izumi = {
    key: {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast"
    },
    message: {
      orderMessage: {
        itemCount: 20,
        message: titulo,
        footerText: "GENGAR BOT • BY WHOIS",
        thumbnail: thumbBuffer,
        surface: 2,
        sellerJid: "0@s.whatsapp.net"
      }
    }
  }

  await conn.sendMessage(m.chat, {
    image: { url: 'https://files.catbox.moe/2l8ad9.jpeg'},
    caption: `╭╾━━━━╼ 〔 ⚡ 〕 ╾━━━━╼╮
┃  💢 *20 VS 20 - GENGAR BOT*
┃
┃ ⏳ *ʜᴏʀᴀʀɪᴏ:*
┃ 🇵🇪 PERÚ: ${args[0]}
┃
┃ 🎮 *ᴍᴏᴅᴀʟɪᴅᴀᴅ:*
┃ 👥 *ᴊᴜɢᴀᴅᴏʀᴇs:*
┃
┃ 🥷 *ᴇsᴄᴜᴀᴅʀᴀ 1:*
┃   👑 • 
┃   🥷🏻 • 
┃   🥷🏻 • 
┃   🥷🏻 • 
┃
┃ 🥷 *ᴇsᴄᴜᴀᴅʀᴀ 2:*
┃   👑 • 
┃   🥷🏻 • 
┃   🥷🏻 • 
┃   🥷🏻 • 
┃
┃ 🥷 *ᴇsᴄᴜᴀᴅʀᴀ 3:*
┃   👑 • 
┃   🥷🏻 • 
┃   🥷🏻 • 
┃   🥷🏻 • 
┃
┃ 🥷 *ᴇsᴄᴜᴀᴅʀᴀ 4:*
┃   👑 • 
┃   🥷🏻 • 
┃   🥷🏻 • 
┃   🥷🏻 • 
┃
┃ 🥷 *ᴇsᴄᴜᴀᴅʀᴀ 5:*
┃   👑 • 
┃   🥷🏻 • 
┃   🥷🏻 • 
┃   🥷🏻 • 
┃
┃ 🔄 *sᴜᴘʟᴇɴᴛᴇs:*
┃   🥷🏻 • 
┃   🥷🏻 • 
╰╾━━━━╼ 〔 🚀 〕 ╾━━━━╼╯
*By Whois Developers • Gengar Bot*`,
    mentions: []
  }, { quoted: izumi})
}

handler.help = ['20vs20']
handler.tags = ['freefire']
handler.command = /^(vs20|20vs20)$/i
handler.group = true

export default handler;
