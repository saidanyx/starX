import { hanlderCreateInvite } from "../commands/invite/inviteCreate.js"
import { handlerSetup } from "../commands/setup/setup.js"
import { ActionRowBuilder, LabelBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } from "discord.js";

export async function interactionCommands(interaction) {
    if (!interaction.isCommand()) return

    switch (interaction.commandName) {

        case 'invite':
            let sub = interaction.options.getSubcommand(false)

            if (!sub) {
                return console.log("ctrc")
                
            }

            if (sub === 'create') {
                console.log('123')
                let lifetime = parseInt(interaction.options.getString('lifetime'))
                let uses = parseInt(interaction.options.getInteger('uses'))
                
                hanlderCreateInvite(interaction, lifetime, uses)
                console.log('123')
            }

            break

        case 'setup':
            await handlerSetup(interaction)
            break

    }
}