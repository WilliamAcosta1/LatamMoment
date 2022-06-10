module.exports = {
    prefix: "l!", // Set your bot Prefix
    serverId: "847330518814294036",
    name: 'LatamMoment', // Set your bot name
    shortUrl: 'latinoland.net', // 
    URL: 'https://latinoland.net', //

    presence: {
        enable: true, // Whether or not the bot should update its status
        status: "idle", // The bot's status [online, idle, dnd, invisible]
        type: "COMPETING",// Status type for the bot [PLAYING | LISTENING | WATCHING | COMPETING]
        message: "Latam Moment", // Your bot status message
    },

    botInvite: { //
        inviteBanner: "image.png",
        URLInvite: "https://latammoment.ga/invite",
        URLSupport_Server: "https://latammoment.ga/server",
        URLWebsite: "https://latammoment.ga"
    },

    media: { //
        botStatusIMG: "https://media.discordapp.net/attachments/965113944182235209/983205029643173908/unknown.png",
    },

    embeds: { //
        color: "#2F3136"
    },

    welcome: {
        channel: '978315026127548466'
    },

    check: {
        channel: '',
        rol: '977052948582531152'
    },

    suggestion: {
        channel: '983205490840436776'
    }
}