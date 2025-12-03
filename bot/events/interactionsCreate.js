import hanlderCreateInvite from "../commands/createInvites.js"

async function interactionCommands(interaction) {
    switch (interaction.options.getSubcommand()) {
        case 'create':
            let lifetime = parseInt(interaction.options.getString('lifetime'))
            console.log(lifetime)
            hanlderCreateInvite(interaction, lifetime)
            
    }
}

export default interactionCommands