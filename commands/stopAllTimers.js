const {bot} = require(`../index`);
const config = require("../config.json");
const fs = require(`fs`)
const date = require(`date-and-time`);
const editJsonFile = require("edit-json-file");


module.exports.run = async (bot, message, args) => {

let timers = JSON.parse(fs.readFileSync(`./guilds/${message.guild.id}/timers.json`, 'utf8')); 

let fileToEdit = editJsonFile(`./guilds/${message.guild.id}/timers.json`);

if(!message.member.hasPermission(`ADMINISTRATOR`)) return await message.reply(`:x: Only administrators can configure timers for this server!`)


for (var property in timers ) {
        fileToEdit.unset(`${property}`)
        fileToEdit.save()
        message.delete()
        message.reply(`:white_check_mark: Stopped timer: ${otherName}!`)
  }


}

module.exports.help = {
    name: "stopalltimers",
    usage: "stopalltimers"
}
