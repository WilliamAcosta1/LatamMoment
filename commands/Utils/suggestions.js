const Discord = require('discord.js');
const { getFooter } = require("@modules/utils/data.js");
const botConfig = require('@config/bot.js');
require("@modules/localization.js");
const emoji = require('@config/emojis.js');

module.exports = {
	name: "suggestions",
	description: "",
	aliases: ["sugiero", "sugiero", "segerencia", "sugerencias"],
	category: "Utils",
	ussage: null,
	hidden: false,
	admin: false,
	nsfw: false,

	async execute(client, message, args) {

		const sugerencia = args.join(" ");

		if (!sugerencia) {

			message.channel.send('Tienes que escribir una sugerencia.')

		} else {

			const embed = new Discord.MessageEmbed()

				.setTitle("> 📭 ➜ NUEVA SUGERENCIA")
				.setColor(botConfig.embeds.color)
				.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
				.setDescription(`Autor » <@${message.author.id}>\nSugerencia ↴\n\`\`\`${sugerencia}\`\`\``)
				.setFooter({ text: `Usa el comando l!sugiero`, iconURL: client.user.avatarURL({ dynamic: true }) })
				.setTimestamp()

			message.channel.send(`Se ha enviado correctamente la sugerencia al canal <#${botConfig.suggestion.channel}>.`)

			client.channels.cache.get(botConfig.suggestion.channel).send({ embeds: [embed] })

				.then(msg => {
					msg.react(emoji.check);
					msg.react(emoji.deny);
				})

		}
	}
}; 