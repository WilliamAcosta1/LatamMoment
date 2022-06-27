const Discord = require('discord.js');
const botConfig = require("@config/bot.js");
const Canvas = require("canvas");


module.exports = {
    event: "guildMemberAdd",
    once: false,
    async execute(member, client) {


        //Welcome Latam
        if (member.guild.id === botConfig.serverId) {

            const canvas = Canvas.createCanvas(1018, 468)
            const ctx = canvas.getContext("2d")

            const background = await Canvas.loadImage('https://i.imgur.com/PFAXleW.png')
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height)

            ctx.fillStyle = "#ffffff"
            ctx.font = "100px serif"
            ctx.textAlign = 'center'

            ctx.fillText("Bienvenido", 700, 150)

            ctx.fillStyle = "#ffffff"
            ctx.font = "80px serif" //sans-serif
            ctx.textAlign = 'center'

            ctx.fillText(`${member.user.username}`, 700, 280)

            ctx.fillStyle = "#ffffff"
            ctx.font = "50px sans-serif"
            ctx.textAlign = 'center'

            ctx.fillText(`Usuario ` + '#' + `${client.guilds.cache.get(botConfig.serverId).memberCount}`, 190, 420)

            const x = 20, y = 10, size = 350

            ctx.save()
            ctx.beginPath()
            ctx.arc(x + size / 2, y + size / 2, size / 2, 0, Math.PI * 2, true)
            ctx.closePath()
            ctx.clip()

            const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ dynamic: true, size: 1024, format: "png" }))
            ctx.drawImage(avatar, x, y, size, size)

            const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "welcome.png")

            client.channels.cache.get(botConfig.welcome.channel).send({ files: [attachment] })

            //roles
            const guild = member.guild;

            member.roles.add('896825169035796530');

        }



    }
}