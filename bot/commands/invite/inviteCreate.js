import { getDB, sendInvite } from "../../services/database.js"
import { messages } from "../../services/messages.js"

export async function hanlderCreateInvite(interaction, lifetime, uses) {
    let db = getDB()

    let invite = await createDiscordInvite(interaction, lifetime, uses)
    sendInviteToDB(db, interaction, invite, uses, lifetime)
    await replyWithInvite(interaction, invite)
}

async function createDiscordInvite(interaction, lifetime, uses) {
    return await interaction.channel.createInvite ({
        maxAge: lifetime,
        maxUses: uses,
        unique: true,
        reason: `Создано пользователем ${interaction.user.tag}`,
    })
}

function sendInviteToDB(db, interaction, invite, uses, lifetime) {
    sendInvite({ db: db, guildId: interaction.guildId, code: invite.code, ownerId: interaction.user.id, maxUses: uses, lifetime: lifetime, expiresAt: invite.expiresAt })
}

async function replyWithInvite(interaction, invite) {
    await interaction.reply({content: messages.inviteCreate(invite.code), ephemeral: true})
}