// export module
const Discord = require("discord.js");
const botConfig = require("@config/bot.js");
const { getFooter } = require("@modules/utils/data");
const emoji = require('@config/emojis.js');
require("@modules/localization.js");
const Canvas = require("canvas")

module.exports = {
    name: "test",
    aliases: [],
    ussage: '',
    examples: [],
    permissions: ['ADMINISTRATOR'],
	category: '',
	hidden: true,
	admin: true,
	nsfw: false,

    async execute(client, message, args) {

        let user = message.mentions.users.first() || message.author;
        let member = message.mentions.members.first() || message.member;

        const canvas = Canvas.createCanvas(1080, 468)
        const ctx = canvas.getContext("2d")

        const background = await Canvas.loadImage("https://i.imgur.com/ifszFme.jpeg")
        ctx.drawImage(background, 0 , 0, canvas.width, canvas.height)

        ctx.strokeStyle = "#FEF300"
        ctx.strokeRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#ffffff"
        ctx.font = "50px Arial"

        ctx.fillText('welcome.title'.trans(), 550, 190)
        ctx.fillText(`${user.username}#${user.discriminator}`, 478, 320)

        ctx.beginPath()
        ctx.arc(247, 238, 175, 0, Math.PI * 2, true)
        ctx.closePath()
        ctx.clip()


        const avatar = await Canvas.loadImage(user.avatarURL({ size: 1024, dynamic: true }))
        ctx.drawImage(avatar, 75, 63, 350, 350)

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome.title'.trans() + ".png")


        return message.channel.send({files: [attachment] });


    }
}