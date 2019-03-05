const Discord = require('discord.js');
const chalk = require('chalk');


exports.execute = (client, message, args) => {
     message.delete().catch(O_o=>{}); 

     let bicon = client.user.displayAvatarURL;

var msg = `Commandes:     **${client.commands.length}**`;
    msg += `\nServeurs:            **${client.guilds.array().length}**`;
    msg += `\nSalons:                **${client.channels.array().length}**`;
    msg += `\nEmojis:                **${client.emojis.array().length}**`;
    msg += `\nPing:                    **${client.ping.toFixed(0)}ms**`;
    msg += `\nUptime:               **${~~(client.uptime/1000)}s**`;   // TODO fix format

    var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(bicon)
        .setTitle("**Invitez le bot sur votre serveur discord.**")
        .setURL("https://discordapp.com/oauth2/authorize?client_id=552439623343931392&scope=bot&permissions=2146958839")
        .addField("Informations Du Bot", msg)
        .setImage("https://media.giphy.com/media/WwZuCwZo7Bdi0TXXsc/giphy.gif");
        

    message.channel.send(embed);
  
  console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(` BOT INFO `))+ ']\n--------------------------------------')

};

exports.info = {
    name: "botinfo",
    alias: ['bi'],
    permission: "default",
    type: "info"
};