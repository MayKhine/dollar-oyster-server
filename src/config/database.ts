import { MongoClient } from "mongodb"
import process from "process"
// const uri = "mongodb://localhost:27017"
// const uri = "mongodb://mongo:27017"
const uri = "mongodb://mongodb:27017"

const username = process.env.MONGO_USERNAME
const password = process.env.MONGO_PASSWORD

console.log("Hey may, remove this, dont log these ever", { username, password })

const client = new MongoClient(uri, { auth: { password, username } })

export const connectToMongoDB = async () => {
  console.log("MONGO URIL: ", uri)
  const mongoDBClient = await client.connect()
  console.log("Connected to mongo DB ")
  return mongoDBClient
}
