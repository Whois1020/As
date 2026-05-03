import { generateWAMessageFromContent } from '@whiskeysockets/baileys'

let handler = async (m, { conn, text, participants, isAdmin }) => {
  if (!isAdmin) return m.reply('🚫 Este comando solo puede usarlo un administrador del grupo.')

  let users = participants.map(u => conn.decodeJid(u.id))
  let q = m.quoted ? m.quoted : m
  let contenido = text || q.text || '📢 ¡Atención a todos!'

  // Generamos el mensaje con la estructura de Business Verificado para DIDIER BOT
  const msg = await generateWAMessageFromContent(m.chat, {
    extendedTextMessage: {
      text: contenido,
      contextInfo: {
        mentionedJid: users,
        isForwarded: true,
        forwardingScore: 999,
        externalAdReply: {
          title: 'Gengar Bot ✅',
          body: 'Notificación Oficial del Grupo',
          thumbnailUrl: 'https://files.catbox.moe/2l8ad9.jpeg',
          sourceUrl: 'https://whatsapp.com/channel/0029Vb5oUp43LdQUVViHwc0m',
          mediaType: 1,
          renderLargerThumbnail: false 
        }
      }
    }
  }, { 
    quoted: {
      key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' },
      message: { 
        conversation: "Hola Soy Gengar Bot" 
      }
    },
    userJid: conn.user.id 
  })

  await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}

handler.help = ['hidetag']
handler.tags = ['group']
handler.command = ['hidetag', 'notify', 'n', 'noti']
handler.group = true
handler.admin = true

export default handler
