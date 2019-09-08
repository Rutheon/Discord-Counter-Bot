const {bot} = require('../index');
const config = require("../config.json");

async function setupConfig(guild){

let fetched = await bot.guilds.get(guild)

    const fs = require('fs')

    var filepath = `/guilds/${fetched.id}/config.json`   

    fs.stat(`guilds/${fetched.id}`,function(err) {
        if (!err) {
            return;
        }
        else if (err.code === 'ENOENT') {
            fs.mkdirSync(`guilds/${fetched.id}`);

               var fileContent = {}

               let toWrite = JSON.stringify(fileContent, null, 4)
           fs.writeFile(`guilds/${fetched.id}/timers.json`, toWrite, (err) => {
                       if (err) throw err;
                       console.log(`Created guild config for ${fetched.name}`)
                   }); 
                 return;
        }
    });

}

module.exports.setupConfig = setupConfig