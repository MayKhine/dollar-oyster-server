import { MongoClient } from "mongodb"
// const uri = "mongodb://localhost:27017"
// const uri = "mongodb://mongo:27017"
const uri = "mongodb://mongodb:27017"

const client = new MongoClient(uri)

export const connectToMongoDB = async () => {
  console.log("MONGO URIL: ", uri)
  const mongoDBClient = await client.connect()
  console.log("Connected to mongo DB ")
  return mongoDBClient
}
