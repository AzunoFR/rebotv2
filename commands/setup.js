const Discord = require('discord.js');
const chalk = require('chalk');

exports.execute = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("Vous n'êtes pas le créateur de ce serveur !\nLaissez cette commande au fondateur ;)");
    //Supprime la commande après utilisation
      message.delete().catch(O_o=>{}); 
    //Créer le message qui va être transmit au créateur
      let bicon = client.user.displayAvatarURL;
      let setupEmbed = new Discord.RichEmbed()
      .setDescription("~Installation du serveur~")
      .addField("Première étape:", "Mettre le role ReBot au dessus des membres")
      .addField("Seconde étape:", "Créer le salon ``📄logs`` il ne doit être visible que par le staff et ReBot")
      .setColor("#ffd800")
      .setImage("https://media.giphy.com/media/3d4QLdc76xEhbQDZGC/giphy.gif")
      .setAuthor("ReBot - BOT FRANCAIS", bicon);
    //Envoie le message dans le salon
      return message.channel.send(setupEmbed)
    //Fin de la commande
    };
    
    exports.info = {
        name: "setup",
        alias: ["config"],
        permission: "default",
        type: "owner"
    };
