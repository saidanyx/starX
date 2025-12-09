import { Client, GatewayIntentBits } from "discord.js";
import { ready } from "./events/ready.js";
import { interactionCommands } from "./events/interactionsCreate.js";

export let client = new Client ({
    intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
})

export async function registerEvents(s) {

    client.once('ready', async() => {
        await ready()
    })

    client.on('interactionCreate', async(interaction) => {
        interactionCommands(interaction)
    })

}