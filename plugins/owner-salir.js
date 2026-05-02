let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
let chat = global.db.data.chats[m.chat]

// Desactivamos bienvenida temporalmente para evitar conflictos al salir
if (chat) chat.welcome = false

let despedida = `╭╾━━━━╼ 〔 ⚡ 〕 ╾━━━━╼╮\n`
despedida += `┃  ✨ *Gengar Bot*\n`
despedida += `╰╾━━━━╼ 〔 🚀 〕 ╾━━━━╼╯\n\n`
despedida += `📢 *Notificación:* El Bot abandonará este grupo.\n\n`
despedida += `Fue un placer servirles. ¡Hasta la próxima! ✌️\n\n`
despedida += `*By Whois Developer • Gengar Bot*`

await conn.reply(id, despedida, m) 
await conn.groupLeave(id)

try {  
if (chat) chat.welcome = true
} catch (e) {
console.log(e)
}}

handler.help = ['salir']
handler.tags = ['owner']
handler.command = /^(salir|leavegc|salirdelgrupo|leave)$/i
handler.group = true
handler.rowner = true

export default handler
