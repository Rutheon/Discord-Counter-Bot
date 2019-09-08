const {bot} = require(`../index`);
const config = require("../config.json");
const fs = require(`fs`)
const date = require(`date-and-time`);
let configCreater = require(`../modules/guildConfigCreater`)

let emptyObj = {

};

bot.on("ready", async () => {

let botOwner = await bot.fetchUser(config.ownerID)

console.log(`Bot Started!`)
console.log(`TimerBot Backend by severepain loaded!`)
console.log(`${bot.user.tag} is online on ${bot.guilds.size} servers!`);




bot.guilds.forEach(async function(serverlist){
    await configCreater.setupConfig(serverlist.id)
	let owner = await bot.fetchUser(serverlist.ownerID)
    console.log(`Server: ${serverlist.name}  with id  ${serverlist.id} || owned by ${owner.tag}`);
    })

bot.user.setActivity(`${config.prefix}help`, {type: "PLAYING"});




})