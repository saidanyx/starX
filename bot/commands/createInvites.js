import { getDB, sendInvite } from "../services/database.js"
import { messages } from "../services/messages.js"

async function hanlderCreateInvite(interaction, lifetime) {
    let db = getDB()

    let invite = await createDiscordInvite(interaction, lifetime)
    sendInviteToDB(db, interaction, invite, lifetime)
    await replyWithInvite(interaction)
}

async function createDiscordInvite(interaction, lifetime) {
    return await interaction.channel.createInvite ({
        maxAge: lifetime,
        maxUses: 0,
        unique: true,
        reason: `Создано пользователем ${interaction.user.tag}`,
    })
}

function sendInviteToDB(db, interaction, invite, lifetime) {
    sendInvite(db, interaction.guildId, invite.code, interaction.user.id, 3, lifetime)
}

async function replyWithInvite(interaction) {

    console.log("RESULT:", messages.inviteStats("123jklkj", '2423'));

    await interaction.reply({content: messages.inviteStats("123jklkj", '2423'), ephemeral: true})
}

export default hanlderCreateInvite