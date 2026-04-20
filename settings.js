
const fs = require("fs");
const chalk = require("chalk")

global.BOT_TOKEN = "8234796926:AAE4foMXbZqhbZ5MYofDm6BopDQfGQHvivk" // create bot here https://t.me/Botfather and get bot token
global.BOT_NAME = "- 𝑰𝑻𝑺 »𝑯𝒂𝒎𝒐 𝒂𝒍𝒋𝒊𝒏  CRASH BOT»࿅ 𓈪" //your bot name
global.OWNER_NAME = "https://t.me/hamoaljin" //your name with sign @
global.OWNER = ["https://t.me/hamoaljin", "https://t.me/hamoaljin"] // Make sure the username is correct so that the special owner features can be used.
global.DEVELOPER = ["6960925330"] //developer telegram id to operate addprem delprem and listprem
global.pp = 'https://files.catbox.moe/6i4r36.jpg' //your bot pp


//approval
global.GROUP_ID = -1005134274683; // Replace with your group ID
global.CHANNEL_ID =  -1003897136020; // Replace with your channel ID
global.GROUP_LINK = "https://t.me/hamoaljin"; // Replace with your group link
global.CHANNEL_INVITE_LINK = "https://t.me/hamoaljin"; // Replace with your private channel invite link
global.WHATSAPP_LINK = "https://wa.me/201556268784"; // Replace with your group link
global.YOUTUBE_LINK = "https://youtube.com/@hamoaljin"; // Replace with your youtube link
global.INSTAGRAM_LINK = "https://whatsapp.com/channel/0029Vb6xCTq3GJP7bulmrM0c"; // Replace with your ig link

global.owner = global.owner = ['+201556268784'] //owner whatsapp

const {
   english
} = require("./lib");
global.language = english
global.lang = language

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})