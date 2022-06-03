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


        //roles
        const guild = member.guild;

        member.roles.add('452092542293377024'); //usuario
        member.roles.add('551530251268653148'); //logros
        member.roles.add('552032387240951808'); //incompleto
        member.roles.add('551221521754882088'); //info basica
        member.roles.add('552032420786864129'); //incompleta
        member.roles.add('551854040128946187'); //rol



    }
}