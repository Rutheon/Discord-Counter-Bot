const {bot} = require(`../index`);
const config = require("../config.json");
const fs = require(`fs`)
const date = require(`date-and-time`);

//Event handler for Message


bot.on("message", async message => {
	
//Checks if a command has been issued	
if(message.author.bot) return;  
if(message.channel.type === "dm") return;

let prefix = config.prefix;
let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);


if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())){
     return; 
    } 

let commandfile = bot.commands.get(cmd.slice(prefix.length));

if(commandfile) commandfile.run(bot,message,args);

})