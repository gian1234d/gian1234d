const help = (prefix) => {
	return `
 ⌜ *ShiroBot 🤖 || by Cami* ⌟  

◉ *INFORMACION*
   ○ Comando: ⌜ ${prefix} ⌟
   ○ Creadora: Camila 
-------------------------------
◉ *NUEVOS MENUS*
- ${prefix}desmenu
Descargar musica y videos de YT
- ${prefix}version
Conoce la versión de tu bot
- ${prefix}welmenu
Comandos de bienvedia a grupos

◉ *PARA USAR EL BOT*
Registrate con el comando ${prefix}daftar y tu nombre

◉ *CREAR STICKERS*
  ║
  ╠ ○ ${prefix}sticker
  ╠ ○ ${prefix}stickergif
  ╚ 6 segundos de video

◉ *CONVERTIDORES*
  ║
  ╠ ○ ${prefix}toimg
  ╠ De sticker a JPG
  ╠ ○ ${prefix}tomp3
  ╚ De video a MP3

◉ *AUDIO*
  ║
  ╠ ○ ${prefix}bahasa
  ╚ ○ ${prefix}tts es (mas texto)

◉ *OTROS*
  ║
  ╠ ○ ${prefix}wame
  ╠ Link de Whatsapp
  ╠ ○ ${prefix}qrcode
  ╚ Coloca un texto

◉ *GRUPOS*
  ║
  ╠ ○ ${prefix}closegc
  ╠ Cerrar el grupo solo admins
  ╠ ○ ${prefix}opengc
  ╠ Abrir grupo solo admins
  ╠ ○ ${prefix}kick o pafuera
  ╠ Eliminar a un miembro 
  ╠ ○ ${prefix}promote
  ╠ Dar admin a un miembro
  ╠ ○ ${prefix}demote
  ╠ Quitar el admin
  ╠ ○ ${prefix}linkgc
  ╠ Link del grupo
  ╠ ○ ${prefix}tagall
  ╚ Nombra a todos los del grupo

Para usar estas funciones el bot necesita admin.
 
`
}

exports.help = help
