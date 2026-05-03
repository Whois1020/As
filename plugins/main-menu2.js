const handler = async (m, { conn }) => {
  // Imagen actualizada para Didier Bot
  const img = 'https://files.catbox.moe/2l8ad9.jpeg' 

  const texto = `
╭╾━━━━╼ 〔 🎵 〕 ╾━━━━╼╮
┃  ⚡ *Gengar Bot Audio*
┃
┃  ✨ *Bye Whois Developer*
┃
┃  *ᴍᴇᴍᴇs ʏ ғʀᴀsᴇs:*
┃  ◦ _El Pepe, Basado, Potasio_
┃  ◦ _Eso va ser epico papus_
┃  ◦ _Se estan riendiendo de mi_
┃  ◦ _Diagnosticado con Gay_
┃  ◦ _Usted es feo, Ara Ara_
┃
┃  *ʀᴇᴀᴄᴄɪᴏɴᴇs:*
┃  ◦ _WTF, OMG, ZZZZ, Joder_
┃  ◦ _Nadie te pregunto_
┃  ◦ _Que onda, Mmmm, Hey_
┃  ◦ _Bien pensado Woody_
┃
┃  *ᴀᴜᴅɪᴏs ᴄʟásɪᴄᴏs:*
┃  ◦ _Chambear, Mudo, Onichan_
┃  ◦ _Siuuu, Yamete, Pikachú_
┃  ◦ _Ma ma masivo, Taka taka_
┃  ◦ _Tunometecabrasaramambiche_
┃
┃  *sᴀʟᴜᴅᴏs:*
┃  ◦ _Buenos días, Buenas noches_
┃  ◦ _Bienvenido wey, Hola_
┃  ◦ _Feliz cumpleaños_
┃
┃  ⚠️ *𝐀𝐝𝐯𝐞𝐫𝐭𝐞𝐧𝐜𝐢𝐚:*
┃  _Escribe el nombre exacto_
┃  _del audio para reproducirlo._
┃
╰╾━━━━╼ 〔 🚀 〕 ╾━━━━╼╯
*By Whois Developer • GengarBot*`.trim()

  await conn.sendMessage(m.chat, { 
    image: { url: img }, 
    caption: texto 
  }, { quoted: m })
}

handler.help = ['menu2', 'menuaudios']
handler.tags = ['main']
handler.command = ['menu2', 'menuaudios', 'audios']

export default handler
