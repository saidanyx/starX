import { connectDB, getDB, sendInvite, contributeDefaultMessages, getCurrentMessages } from "../services/database.js"
import { returnDefaultMessages, createCurrentMessages } from "../services/messages.js"

export async function ready() {
    await connectDB()
    contributeDefaultMessages(getDB(), returnDefaultMessages())
    createCurrentMessages()
}