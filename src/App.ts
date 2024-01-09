import express from "express"
import { connectToMongoDB } from "./config/database"

const app = express()
const port = 3300

const main = async () => {
  console.log("MAIN")

  //connect to mongoDB
  const mongoClient = await connectToMongoDB()
  const mongoDatabase = mongoClient.db("mydb")

  app.get("/", (req, res) => {
    res.send("HELLO from express")
  })

  app.listen(port, () => {
    console.log("Express server is upppp")
  })
}

main()
