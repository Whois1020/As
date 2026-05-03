const handler = async (m, { conn}) => {
    let mensaje = `
🌟 *¡Bienvenido al Menú de Juegos!* 🎮🔥
📌 **Explora diferentes categorías y diviértete con los mejores desafíos!**

━━━━━━━━━━━━━━━━━━
🏆 **Juegos de Habilidad** 🧠
━━━━━━━━━━━━━━━━━━
🧐 *Trivia:* \`.trivia\` 📖 - Pon a prueba tu conocimiento con preguntas desafiantes.
📜 *Ahorcado:* \`.ahorcado\` 🔡 - Adivina la palabra antes de perder.
🔑 *Acertijos:* \`.acertijo\` 🧩 - Resuelve enigmas y demuestra tu lógica.
➗ *Mate:* \`.mate\` 🧮 - Compite en cálculos matemáticos rápidos.
🧩 *Sopa de Letras:* \`.sopa\` 🔠 - Encuentra palabras ocultas y completa el reto.

━━━━━━━━━━━━━━━━━━
🔥 **Juegos de Azar** 🎲
━━━━━━━━━━━━━━━━━━
🎰 *Ruleta:* \`.ruleta\` 🔄 - Gira la ruleta y prueba tu suerte.
🎲 *Dado:* \`.dado\` 🎲 - Lanza el dado y gana premios aleatorios.
🥊 *Pelear:* \`.pelear\` 💥 - Enfréntate a otros jugadores en un duelo épico.

━━━━━━━━━━━━━━━━━━
🌍 **Juegos de Aventura** 🚀
━━━━━━━━━━━━━━━━━━
🏹 *Cazar:* \`.cazar\` 🦌 - Explora, busca presas y consigue recompensas.
🌲 *Supervivencia:* \`.supervivencia\` 🏕️ - Toma decisiones para sobrevivir en escenarios extremos.
🕵️ *Detective:* \`.detective\` 🔍 - Investiga casos misteriosos y encuentra pistas.
🚪 *Escape:* \`.escape\` 🔑 - Resuelve acertijos y escapa de habitaciones cerradas.

━━━━━━━━━━━━━━━━━━
🚀 **Zona Gamer - Juegos Especiales** 🎮🔥
━━━━━━━━━━━━━━━━━━
🕹️ *Juegos Clásicos:* \`.classic\` 🎮 - Revive los juegos retro con Pong, Snake y más!
🔥 *Modo Ranked:* \`.rankedmode\` 🏆 - Sube de nivel y conviértete en Leyenda!
🏅 *Torneo Gamer:* \`.nament\` 🎯 - Participa en torneos y sube en el ranking!
⚡ *Modo Gamer:* \`.gamer\` 🚀 - Experimenta desafíos extremos y demuestra quién manda!

━━━━━━━━━━━━━━━━━━
👽 **Modo Alienígena & Futurista** 🚀🤖
━━━━━━━━━━━━━━━━━━
🛸 *Defensa Alienígena:* \`.alienigena\` 🌍 - Protege la Tierra de una invasión extraterrestre!
🕵️‍♂️ *Aliens Entre Nosotros:* \`.aliens\` 👀 - Descubre infiltrados alienígenas en tu equipo!
🔩 *Construcción de Robots:* \`.robotp\` 🤖 - Crea tu propio robot y compite en batallas tecnológicas!

━━━━━━━━━━━━━━━━━━
🍽️ **Modo Especial - Juegos de Cocina** 🍳
━━━━━━━━━━━━━━━━━━
🍕 *Chef Extremo:* \`.chefextremo\` 🔥 - Cocina bajo presión y supera desafíos culinarios!
🎭 *Cocina Caótica:* \`.chefloco\` 🌀 - Enfréntate al caos de ingredientes locos!
🥇 *Batalla de Chefs:* \`.batallachef\` 👨‍🍳 - Compite contra otros chefs y demuestra tu talento!
🍰 *Postres Creativos:* \`.postres\` 🎂 - Sorprende a los jueces con un postre espectacular!

━━━━━━━━━━━━━━━━━━
🔥 **¡Juega, compite y diviértete con tu bot!** 🏆
🕹️ **Escribe el comando de cualquier juego para comenzar!** 🚀
🎮 **¡La diversión no tiene límites!**
`;

    const imageUrl = "https://files.catbox.moe/2l8ad9.jpeg";

    await conn.sendMessage(m.chat, {
        image: { url: imageUrl},
        caption: mensaje
});
};

handler.command = ["menu4"];
handler.tags = ["main"];
export default handler;