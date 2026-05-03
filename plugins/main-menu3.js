import axios from 'axios'

const handler = async (m, { isPrems, conn }) => {
  const last = global.db.data.users[m.sender].lastcofre || 0
  const now = new Date() * 1
  const cooldown = 0 

  if (now - last < cooldown) {
    const wait = msToTime((last + cooldown) - now)
    throw `⏳ El sistema está procesando... Espera *${wait}*.`
  }

  // Nueva Imagen de Didier Bot
  const img = 'https://files.catbox.moe/dpofx7.jpg' 

  const texto = `
╭╾━━━━╼ 〔 🎨 〕 ╾━━━━╼╮
┃  ✨ *Gengar Bot Logos*
┃
┃  🚀 *GENGAR Systen*
┃  ⚡ *Bye Whois Developer*
┃
┃  *ᴇsᴛɪʟᴏs ᴅᴇ ᴛᴇxᴛᴏ:*
┃  ◦ .logoneon
┃  ◦ .logoglitch
┃  ◦ .logograffiti3d
┃  ◦ .logomatrix
┃  ◦ .logofuturista
┃  ◦ .logocielo
┃
┃  *ɢᴀᴍɪɴɢ & ᴘᴇʀsᴏɴᴀᴊᴇs:*
┃  ◦ .logogaming
┃  ◦ .logonaruto
┃  ◦ .logodragonball
┃  ◦ .logoarmy
┃  ◦ .logopubg
┃  ◦ .logopubgfem
┃  ◦ .logoguerrero
┃  ◦ .logolol
┃  ◦ .logoamongus
┃
┃  *ᴇғᴇᴄᴛᴏs ʏ ʀᴇᴅᴇs:*
┃  ◦ .tweet
┃  ◦ .sadcat
┃  ◦ .logocorazon
┃  ◦ .logopareja
┃  ◦ .logoalas
┃  ◦ .logonube
┃  ◦ .logohorror
┃
┃  *ᴍᴜʟᴛɪᴍᴇᴅɪᴀ:*
┃  ◦ .logoportadaplayer
┃  ◦ .logoportadaff
┃  ◦ .logovideotiger
┃  ◦ .logovideointro
┃  ◦ .logovideogaming
┃
╰╾━━━━╼ 〔 🚀 〕 ╾━━━━╼╯
*By Whois Developer • Gengar Bot*`.trim()

  await conn.sendMessage(m.chat, { image: { url: img }, caption: texto }, { quoted: m })

  global.db.data.users[m.sender].lastcofre = now
}

handler.help = ['menu3', 'logos']
handler.tags = ['main', 'logo']
handler.command = ['menulogos', 'logos', 'menu3', 'disaños'] 

export default handler

function msToTime(duration) {
  let seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return `${hours}h ${minutes}m ${seconds}s`
}
