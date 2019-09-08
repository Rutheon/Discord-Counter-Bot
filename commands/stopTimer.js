/*
const {bot} = require(`../index`);
const config = require("../config.json");
const fs = require(`fs`)
const date = require(`date-and-time`);
const editJsonFile = require("edit-json-file");


module.exports.run = async (bot, message, args) => {

let otherName = args.join(" ")

if(!otherName) return await message.reply(`:x: You must supply a name for the timer to stop!`)

let timers = JSON.parse(fs.readFileSync(`./guilds/${message.guild.id}/timers.json`, 'utf8')); 

let fileToEdit = editJsonFile(`./guilds/${message.guild.id}/timers.json`);

if(!message.member.hasPermission(`ADMINISTRATOR`)) return await message.reply(`:x: Only administrators can configure timers for this server!`)

let i = 0

for (var property in timers ) {
    if(property == `${otherName}`){
        i++
        fileToEdit.unset(`${otherName}`)
        fileToEdit.save()
        message.delete()
        return message.reply(`:white_check_mark: Stopped timer: ${otherName}!`)
  }
  }

 return message.reply(`:x: There is no timer with that name!`);

}

module.exports.help = {
    name: "stoptimer",
    usage: "stoptimer [timer name]"
}
*/

// Not Ready yet
