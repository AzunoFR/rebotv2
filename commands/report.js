const Discord = require('discord.js');
const chalk = require('chalk');

exports.execute = async (client, message, args) => {
      message.delete().catch(O_o=>{}); 

      let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
      let ricon = message.guild.iconURL;
  
      let helpreportEmbed = new Discord.RichEmbed()
      .setDescription("~Aide REPORT~")
      .setColor("#008ae6")
      .setThumbnail(ricon)
      .addField("Comment report ?", `Pour cela, <@${message.author.id}> tu dois faire la commande: \n**__-report__ __{membre}__ __{raison}__**`);
  
      if (!rUser) return message.channel.send(helpreportEmbed);
      // args = ["<@3245234535>", "ceci", "est", "une", "raison"]
      const [, ...rest] = args
      const rReason = rest.join(" ")
      if(!rReason) return message.channel.send("Merci d'inclure une raison.\nPour plus d'aide faite __**-report**__.")
  
      let reportEmbed = new Discord.RichEmbed()
          .setDescription("Reports")
          .setColor("#008ae6")
          .setThumbnail(ricon)
          .addField("Membre visé:", `${rUser} avec l'ID: ${rUser.id}`)
          .addField("Signalé par:", `${message.author} avec l'ID: ${message.author.id}`)
          .addField("Dans le salon:", message.channel)
          .addField("À:", message.createdAt)
          .addField("Pour:", rReason);
  
      let reportschannel = message.guild.channels.find(`name`, "📄logs");
      if (!reportschannel) return message.channel.send("``Ce serveur n'a pas encore été setup !\nFaites la commande **-setup** pour débuter.``");

      reportschannel.send(reportEmbed);
      return;
      
    };
    
    exports.info = {
        name: "report",
        alias: ["config"],
        permission: "default",
        type: "general"
    };