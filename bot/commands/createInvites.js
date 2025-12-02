async function createDiscordInvite(interaction, lifetime) {
    let invite = await interaction.channel.createInvite ({
        maxAge: lifetime,
        maxUses: 0,
        unique: true,
        reason: `Создано пользователем ${interaction.user.tag}`,
    })
    await interaction.reply({content: `https://discord.gg/${invite.code}`, ephemeral: true})
    return invite
}

export default createDiscordInvite