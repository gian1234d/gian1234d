const help = (prefix) => {
	return `
 β *ShiroBot π€ || by Cami* β  

β *INFORMACION*
   β Comando: β ${prefix} β
   β Creadora: Camila 
-------------------------------
β *NUEVOS MENUS*
- ${prefix}desmenu
Descargar musica y videos de YT
- ${prefix}version
Conoce la versiΓ³n de tu bot
- ${prefix}welmenu
Comandos de bienvedia a grupos

β *PARA USAR EL BOT*
Registrate con el comando ${prefix}daftar y tu nombre

β *CREAR STICKERS*
  β
  β  β ${prefix}sticker
  β  β ${prefix}stickergif
  β 6 segundos de video

β *CONVERTIDORES*
  β
  β  β ${prefix}toimg
  β  De sticker a JPG
  β  β ${prefix}tomp3
  β De video a MP3

β *AUDIO*
  β
  β  β ${prefix}bahasa
  β β ${prefix}tts es (mas texto)

β *OTROS*
  β
  β  β ${prefix}wame
  β  Link de Whatsapp
  β  β ${prefix}qrcode
  β Coloca un texto

β *GRUPOS*
  β
  β  β ${prefix}closegc
  β  Cerrar el grupo solo admins
  β  β ${prefix}opengc
  β  Abrir grupo solo admins
  β  β ${prefix}kick o pafuera
  β  Eliminar a un miembro 
  β  β ${prefix}promote
  β  Dar admin a un miembro
  β  β ${prefix}demote
  β  Quitar el admin
  β  β ${prefix}linkgc
  β  Link del grupo
  β  β ${prefix}tagall
  β Nombra a todos los del grupo

Para usar estas funciones el bot necesita admin.
 
`
}

exports.help = help
