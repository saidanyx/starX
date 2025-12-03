import { Client, GatewayIntentBits } from "discord.js"
import dotenv from "dotenv"
import registerCommands from "./services/commands.js"
import interactionCommands from "./events/interactionsCreate.js"
import { connectDB, getDB, sendInvite, contributeDefaultMessages, getCurrentMessages } from "./services/database.js"
import { returnDefaultMessages, initCurrentMessages } from "./services/messages.js"
dotenv.config()



let client = new Client ({
    intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
})

client.once('ready', async() => {
    await connectDB()
    contributeDefaultMessages(getDB(), returnDefaultMessages())
    initCurrentMessages(await getCurrentMessages(getDB()))
})

client.on('interactionCreate', async(interaction) => {
    interactionCommands(interaction)
})

await registerCommands()




client.login(process.env.token)