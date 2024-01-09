import { MongoClient } from "mongodb"
const uri = "mongodb://localhost:27017"
const client = new MongoClient(uri)

export const connectToMongoDB = async () => {
  const mongoDBClient = await client.connect()
  return mongoDBClient
}
