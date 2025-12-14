import { insertInfoAboutGuild, getDB } from "../services/database.js"

export async function guildCreate(guild) {
    await sendWelcomigsMessage(guild)
    await sendDefaultInfo(guild) 
}

async function sendWelcomigsMessage(guild) {
    let owner = await guild.fetchOwner()

    if (guild.systemChannel) {
        guild.systemChannel.send("233")
    } else if (guild.publicUpdatesChannel && !guild.systemChannel) {
        guild.publicUpdatesChannel.send('123')
    }

    if (owner) {
        owner.send('122')
    }
}

async function sendDefaultInfo(guild) {
    insertInfoAboutGuild({ 
        db: getDB(),
        inviteIimitPerUser: 1,
        guildId: guild.id,
        adminRole: null, locale: guild.preferredLocale ?? null,
        logsChannel: guild.systemChannelId || guild.publicUpdatesChannelId 
    })
}