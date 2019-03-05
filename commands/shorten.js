const Discord = require('discord.js');
const chalk = require('chalk');
const shorten = require("isgd");

exports.execute = async (client, message, args) => {
  
    message.delete().catch(O_o=>{});

    let sicon = message.guild.iconURL;
    let shortenHelpEmbed = new Discord.RichEmbed()
    .setDescription("~Aide SHORTEN~")
    .setColor("#00d0ff")
    .addField("Comment réduire une URL ?", `C'est simple <@${message.author.id}> il suffit de faire la commande:\n**-shorten {URL} {Titre}**`)
    .setThumbnail(sicon);

    if(!args[1]) return message.channel.send(shortenHelpEmbed)
    if(!args[2]) {
        shorten.shorten(args[1], function(res) {
            if (res.startsWith('Error:')) return message.channel.send("Entre une URL valide s'il-te-plait !");

            message.channel.send(`**<${res}>**`);
        })
    } else {
        shorten.custom(args[1], args[2], function(res) {
            if (res.startsWith('Error:')) return message.channel.send(`**${res}**`);
            
            message.channel.send(`**<${res}>**`);
        })
    }

    };
    
    exports.info = {
        name: "shorten",
        alias: ["shorturl"],
        permission: "default",
        type: "general"
    };