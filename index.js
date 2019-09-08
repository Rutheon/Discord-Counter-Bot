const ms = require("ms")
const Discord = require("discord.js")
const fs = require("fs")
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
bot.config =  JSON.parse(fs.readFileSync(`./config.json`, 'utf8'));
bot.aliases = new Discord.Collection();

let config = require("./config.json")

let token = config.token || process.env.token


require("./functions")(bot);


module.exports = {
  bot: bot
};

bot.login(token)


