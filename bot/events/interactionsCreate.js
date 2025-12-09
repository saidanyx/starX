import { hanlderCreateInvite } from "../commands/invite/inviteCreate.js"

export async function interactionCommands(interaction) {
    switch (interaction.options.getSubcommand()) {
        case 'create':
            let lifetime = parseInt(interaction.options.getString('lifetime'))
            console.log(lifetime)
            hanlderCreateInvite(interaction, lifetime)
    }
}