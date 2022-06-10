const Discord = require('discord.js');
const botConfig = require("@config/bot.js");
const { getFooter } = require("@modules/utils/data.js");
const emoji = require('@config/emojis.js');
require("@modules/localization.js");

module.exports = {
    name: "jumbo",
    description: "",
    aliases: [],
    ussage: null,
    hidden: false,
    admin: false,
    nsfw: false,
    async execute(client, message, args) {

        if(!args[0]) return message.reply({content: "Ingresa un emoji valido"})

        let emoji = message.guild.emojis.cache.find(x => x.name === args[0].split(":")[1])

        if(!emoji) return message.reply({content: "coloca un emoji"})

        const embed = new Discord.MessageEmbed()

        .setTitle("Jumbo")
        .setColor(botConfig.embeds.color)
        .setImage(emoji.url)


       message.reply({ embeds: [embed]})
    }
}