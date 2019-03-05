const Discord = require('discord.js');
const chalk = require('chalk');

exports.execute = (client, message, args) => {
  message.delete().catch(O_o=>{}); 
  
    var generalCommands = "";
    var infoCommands = "";
    var modoCommands = "";
    var adminCommands = "";
	var ownerCommands = "";

    client.commands.forEach(command => {
        switch(command.info.type){
            case "general":
                generalCommands += command.info.name + "\n";
                break;

            case "info":
                infoCommands += command.info.name + "\n";
                break;
            
            case "modo":
                modoCommands += command.info.name + "\n";
                break;

            case "admin":
                adminCommands += command.info.name + "\n";
                break;
				
			case "owner":
                ownerCommands += command.info.name + "\n";
                break;

     
        }
    });

    var embed = new Discord.RichEmbed()
        .setColor(9955331)
        .addField("Commandes Générales", ` \`\`\`css\n${generalCommands}\n\`\`\` ` + "\n",true)
        .addField("Commandes Informatives", ` \`\`\`css\n${infoCommands}\n\`\`\` ` + "\n",true)
        .addField("Commandes Modérateur", ` \`\`\`css\n${modoCommands}\n\`\`\` ` + "\n",true)
        .addField("Commandes Administrateur", ` \`\`\`css\n${adminCommands}\n\`\`\` ` + "\n",true)
		.addField("Commandes Fondateur", ` \`\`\`fix\n${ownerCommands}\n\`\`\` ` + "\n",true);

    message.channel.send(embed);
  
  	    console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(` COMMANDES `))+ ']\n--------------------------------------')     

};

exports.info = {
    name: "aide",
    alias: ["cmds", "cmd", "help", "commandes", "commande"],
    permission: "default",
    type: "info"
};
