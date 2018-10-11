const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag)
        .setImage(message.author.avatarURL)

    message.channel.send(embed);

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['crew'],
  permLevel: 0 
};

exports.help = {
  name: 'crew', 
  description: 'Bot Yöneticisini Gösterir',
  usage: 'crew'
};
