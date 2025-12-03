import { MongoClient } from 'mongodb' 
let client = null
let db = null

export async function connectDB() {
    if (db) return db

    client = new MongoClient(process.env.database)
    await client.connect()

    db = client.db('starX')
    return db
}

export function getDB() {
    if (!db) {
        throw new Error("Ошибка при получении ДБ")
    }

    return db
}

export async function sendInvite(db, guildId, code, ownerId, maxUses, lifetime) {
    return await db.collection('invites').insertOne({
        guildId: guildId,
        code: code,
        ownerId: ownerId,
        createdAt: new Date(),

        totalJoins: 0,
        totalLeaves: 0,
        uniqueUsers: 0, 

        maxUses: maxUses,
        expiresAt: lifetime,

        deleted: false,
    })
}

export async function contributeDefaultMessages(db, messages) {
    let collection = db.collection('messages')

    for (const [title, description] of Object.entries(messages)) {
        let exists = await collection.findOne({ title })
        if (!exists) {
            await collection.insertOne({ title, description })
        }
    }
}

export async function getCurrentMessages(db) {
    let docs = await db.collection('messages').find({}).toArray()
    return docs
}