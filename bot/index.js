import { Client, GatewayIntentBits } from "discord.js"
import dotenv from "dotenv"
import registerCommands from "./services/commands.js"
import interactionCommands from "./events/interactionsCreate.js"
dotenv.config()

let client = new Client ({
    intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
})

client.on('interactionCreate', async(interaction) => {
    interactionCommands(interaction)
})

await registerCommands()

client.login(process.env.token)