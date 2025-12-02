import { MongoClient } from 'mongodb' 

class Database {
    constructor () {
        this.client = client
    }

    static async connect() {
        let client = new MongoClient(process.env.database)
        await client.connect()
        return client
    }
}

export default Database