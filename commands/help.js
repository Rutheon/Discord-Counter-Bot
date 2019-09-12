const Discord = require("discord.js");
let config = require(`../config.json`)
module.exports.run = async (bot, message, args) => {
    let sicon = bot.user.displayAvatarURL;
    let botOwner = await bot.fetchUser(bot.config.ownerID)
    let prefix = bot.config.prefix


    let serverembed = new Discord.RichEmbed()
     .setDescription("Help")
     .setColor("#f4fc00")
     .setThumbnail(sicon)
     .addField(`Start a timer`, `${prefix}starttimer [timer name]`)
     .addField(`Stop a timer`, `${prefix}stoptimer [timer name]`)
    // .addField(`Stop all timers`, `${prefix}stopalltimers`)
     .addField(`See a timers duration`, `${prefix}timer [timer name]`)
     .addField(`List all timers`, `${prefix}listtimers`)
     .addField("Bot Prefix:", `${bot.config.prefix}`)
     .setFooter(`Bot Owned By: ${botOwner.tag} || Made by severepain || https://github.com/SeverePain/Discord-Counter-Bot`)
	 .setTimestamp();
     message.channel.send(serverembed);
     return;
}
 
module.exports.help = {
  name: "help"
}
