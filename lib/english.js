function escapeMarkdownV2(text) {
    return text.replace(/([_*[\]()~`>#+\-=|{}.!\\])/g, '\\$1'); 
}

exports.noToken = "The bot token cannot be empty, please create a bot via https://t.me/BotFather";

exports.first_chat = (botname, pushname) => {
    return escapeMarkdownV2(`█▓▒░𝑯𝒂𝒎𝒐 𝒂𝒍𝒋𝒊𝒏░▒▓█
⚠️ 𝑾𝑬 𝑨𝑹𝑬 𝑵𝑶𝑻 𝑹𝑬𝑺𝑷𝑶𝑵𝑺𝑰𝑩𝑳𝑬 ⚠️

📌 مرحباً بك أيها المستخدم 📌
💲 سيطرة • قوة • تدمير 💲

⌨️ اكتب:
/menu

👑 Dev » @Medo_Official_11`);
};