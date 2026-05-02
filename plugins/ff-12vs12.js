import fs from 'fs'
import path from 'path'

let handlerLista = async (m, { conn }) => {
  const listaPath = path.join('./database/lista12vs12.json')

  // Si no existe, lo creamos vacío
  if (!fs.existsSync(listaPath)) {
    const inicial = { titulares: [], suplentes: [] }
    // Asegurarse de que el directorio exista
    if (!fs.existsSync('./database')) fs.mkdirSync('./database')
    fs.writeFileSync(listaPath, JSON.stringify(inicial, null, 2))
  }

  const lista = JSON.parse(fs.readFileSync(listaPath, 'utf-8'))

  let texto = `╭╾━━━━╼ 〔 ⚡ 〕 ╾━━━━╼╮\n`
  texto += `┃  ✨ *Gengar Bot Lista 12Vs12*\n`
  texto += `┃\n`
  texto += `┃ 👑 *Titulares:*\n`

  if (lista.titulares.length === 0) {
    texto += `┃  (vacío)\n`
  } else {
    lista.titulares.forEach((j, i) => {
      texto += `┃  ${i + 1}. ${j}\n`
    })
  }

  texto += `┃\n`
  texto += `┃ 🛡️ *Suplentes:*\n`

  if (lista.suplentes.length === 0) {
    texto += `┃  (vacío)\n`
  } else {
    lista.suplentes.forEach((j, i) => {
      texto += `┃  ${i + 1}. ${j}\n`
    })
  }

  texto += `┃\n`
  texto += `╰╾━━━━╼ 〔 🚀 〕 ╾━━━━╼╯\n`
  texto += `*By Whois Developer • Gengar Bot*`

  await conn.sendMessage(m.chat, { text: texto.trim() }, { quoted: m })
}

handlerLista.help = ['12vs12']
handlerLista.tags = ['freefire']
handlerLista.command = /^(12vs12)$/i
handlerLista.group = true

export default handlerLista
