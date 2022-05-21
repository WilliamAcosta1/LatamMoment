const Discord = require('discord.js');
const botConfig = require("@config/bot.js");


module.exports = {
    event: "guildMemberAdd",
    once: false,
    async execute(member, client) {


        //Welcome Latinoland
        let embed = new Discord.MessageEmbed()

            .setColor(botConfig.embeds.color)
            .setDescription(`> **<@${member.user.id}> ha llegado a Latinoland!** 🎉\n Bienvenido a la comunidad de Latinoland en Discord!\n\n💻 Pasa el rato e interactúa con otros miembros de la comunidad!\n\n\`\`\`Sé respetuoso con los demas miembros de la comunidad y no olvides leer y respetar nuestras reglas. 📝 \`\`\`\n**Miembros totales »** ${client.guilds.cache.get(botConfig.serverId).memberCount}\n**Página web »** https://web.latinoland.net/`)
            .setThumbnail(member.user.avatarURL({ dynamic: true }))
            .setTimestamp()

        client.channels.cache.get(botConfig.welcome.channel).send({ embeds: [embed] })



    }
}