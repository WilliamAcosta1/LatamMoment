const Discord = require('discord.js');
const Canvas = require('canvas');
const botConfig = require("@config/bot.js");
const { getFooter } = require("@modules/utils/data.js");
const emoji = require('@config/emojis.js');
require("@modules/localization.js");

module.exports = {
    name: "wasted",
    description: "",
    aliases: [],
    ussage: null,
    hidden: false,
    admin: false,
    nsfw: false,
    async execute(client, message, args) {



        const user = message.mentions.members.first();
        if (!user) {

            const embed = new Discord.MessageEmbed()

                .setDescription('🤔 ¿Perdido? ¿Quién?')
                .setColor(botConfig.embeds.color)

            return message.channel.send({ embeds: [embed] });
        }
        const avatar = user.user.displayAvatarURL({ size: 2048, format: "png" });

        const embed = new Discord.MessageEmbed()

            .setImage(`https://some-random-api.ml/canvas/wasted?avatar=${avatar}`)
            .setColor(botConfig.embeds.color)

        await message.channel.send({ embeds: [embed] });

    }
}