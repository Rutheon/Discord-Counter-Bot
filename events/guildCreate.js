const {bot} = require(`../index`);
const config = require("../config.json");
let configCreater = require(`../modules/guildConfigCreater`)

const fs = require(`fs`)

const Discord = require('discord.js')

bot.on("guildCreate", async guild => {
	

await configCreater.setupConfig(guild.id)

  guild.owner.send(`${bot.user.username} has been added to your server **${guild.name}**. Be sure to do ${config.prefix}help to see the commands.`);


})
