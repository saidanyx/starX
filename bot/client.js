import { Client, GatewayIntentBits } from "discord.js";
import { ready } from "./events/ready.js";
import { interactionCommands } from "./events/interactionsCreate.js";
import { guildCreate } from "./events/guildCreate.js";

export let client = new Client ({
    intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
})

export async function registerEvents() {

    client.once('ready', async() => {
        await ready()
    })

    client.on('interactionCreate', async(interaction) => {
        interactionCommands(interaction)
    })

    client.on('guildCreate', async(guild) => {
        await guildCreate(guild)
    }) 

}