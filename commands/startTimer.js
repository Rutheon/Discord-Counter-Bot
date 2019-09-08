const {bot} = require(`../index`);
const config = require("../config.json");
const fs = require(`fs`)
const date = require(`date-and-time`);
const editJsonFile = require("edit-json-file");


module.exports.run = async (bot, message, args) => {

let otherName = args.join(" ")

if(!otherName) return await message.reply(`:x: You must supply a name for this timer!`)

let timers = JSON.parse(fs.readFileSync(`./guilds/${message.guild.id}/timers.json`, 'utf8')); 

let fileToEdit = editJsonFile(`./guilds/${message.guild.id}/timers.json`);

let id = await message.guild.id

let dateTimeStamp = Date.now()

if(!message.member.hasPermission(`ADMINISTRATOR`)) return await message.reply(`:x: Only administrators can configure timers for this server!`)

let i = 0

let timerAmount = 0

for (var property in timers ) {
    timerAmount++
    if(property == `${otherName}`){
        i++
        return message.reply(`:x: There is already a timer running with that same name!`)
  }
  }


  if(timerAmount >= 10) return message.reply(`:x: You can only run 10 timers at a time in a guild!`);
  if(i > 0) return;
fileToEdit.set(`${otherName}`, `${dateTimeStamp}`)
fileToEdit.save()

message.delete()
return message.channel.send(`:white_check_mark: Timer *${otherName}* has been set!`)

}

module.exports.help = {
    name: "starttimer",
    usage: "startimer [timer name]"
}
