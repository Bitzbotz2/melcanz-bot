let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, command }) => {
    let res = await fetch(API('amell', '/randomwp', {}, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    conn.sendButtonImg(m.chat, json.result, 'Nieh banh walppapernya', wm, 'random wp again', `${usedPrefix + command}`, m)
}
handler.help = ['randomwp']
handler.tags = ['fun']
handler.command = /^(randomwp)$/i

module.exports = handler