import dotenv from "dotenv"
import registerCommands from "./services/commands.js"
dotenv.config()

import { client, registerEvents } from "./client.js"

await registerEvents()
await registerCommands()

client.login(process.env.token)