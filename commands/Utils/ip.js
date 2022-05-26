const Discord = require('discord.js');
const { getFooter } = require("@modules/utils/data.js");
const botConfig = require('@config/bot.js');
require("@modules/localization.js");

module.exports = {
	name: "ip",
	description: "",
	aliases: [],
	category: "Utils",
	ussage: null,
	hidden: false,
	admin: false,
	nsfw: false,

	async execute(client, message, args) {

		const embed = new Discord.MessageEmbed()

			.setAuthor({ name: 'LatinoLand', iconURL: botConfig.media.botStatusIMG })
			.setDescription("Aqui te dejo la ip de java y bedrock. <a:irongolem:979227313801670696> \n\n**NOTA:** El puerto es por defecto asi que no lo modifiques.\n⠀⠀")
			.addField('<:java:979227213754949712> Java edition', '**┕ **' + '`latinoland.net`', true)
			.addField('<:bedrock:979227059022884924> Bedrock edition', '**┕ **' + '`latinoland.net`', true)
			.addField('<a:MC_XP:979230021954723880> Estado:', '**┕ **' + '`Cerrado teporalmene`')
			.setColor(botConfig.embeds.color)
			.setFooter({ text: getFooter(message.member.user.tag), iconURL: message.author.avatarURL({ dynamic: true }) })

		return message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } });
	}
}