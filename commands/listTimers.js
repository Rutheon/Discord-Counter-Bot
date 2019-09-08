const {bot} = require(`../index`);
const config = require("../config.json");
const fs = require(`fs`)
const date = require(`date-and-time`);
const editJsonFile = require("edit-json-file");

const discord = require(`discord.js`)

module.exports.run = async (bot, message, args) => {

let timers = JSON.parse(fs.readFileSync(`./guilds/${message.guild.id}/timers.json`, 'utf8')); 

let fileToEdit = editJsonFile(`./guilds/${message.guild.id}/timers.json`);


let timerNames = []

for (var property in timers ) {
timerNames.push(property)
  }


  if(timerNames.length == 0) return message.reply(`:x: There are no running timers in this guild!`)
else{
let sicon = bot.user.displayAvatarURL;
let embed = new discord.RichEmbed()
    embed.setDescription("Timers")
    embed.setColor("#f4fc00")
    embed .setThumbnail(sicon)
    embed.addField(`Running Timers:`, `${timerNames.toString()}`)
    embed.setTimestamp();

    return message.reply(embed)

}

}

module.exports.help = {
    name: "listtimers",
    usage: "listtimers"
}