let file = require('../modules/convertMS')

const editJsonFile = require("edit-json-file");
const {bot} = require(`../index`);
const config = require("../config.json");
const fs = require(`fs`)
const date = require(`date-and-time`);
let configCreater = require(`../modules/guildConfigCreater`)

let convertMS = file.convertMS

module.exports.run = async (bot, message, args) => {

    let timerToCheck = args.join(" ")
    if(!timerToCheck) return await message.reply(`:x: You must supply a name for the timer to check on!`)
		
    await configCreater.setupConfig(message.guild.id)
    let timers = JSON.parse(fs.readFileSync(`./guilds/${message.guild.id}/timers.json`, 'utf8')); 

    let i = 0

    for (var property in timers ) {
        if(property == `${timerToCheck}`){
            i++
            currentDate = (Date.now() - Number(timers[property]));
            timeRunning = await convertMS(currentDate);
            
        
        return message.reply(`Timer *${timerToCheck}* has been running for: ${timeRunning.day} days, ${timeRunning.hour} hours, ${timeRunning.minute} minutes, and ${timeRunning.seconds} seconds`)
        }
      }

return message.reply(`:x: There is no timer with that name!`)



}



module.exports.help = {
    name: "timer",
    usage: "timer [timer name]"
}