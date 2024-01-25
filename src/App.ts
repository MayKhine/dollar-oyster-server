import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import { connectToMongoDB } from "./config/database"
import {
  addPlace,
  checkIfPlaceExists,
  getPlaces,
  lovePlace,
  unlovePlace,
} from "./apiCalls"
const app = express()
app.use(cors())
app.use(bodyParser.json())
const port = 3300

const main = async () => {
  console.log("Express up .. ")
  console.log("Connectiong to MOONGO db  ")

  //connect to mongoDB
  const mongoClient = await connectToMongoDB()
  const mongoDatabase = mongoClient.db("mydb")

  app.get("/", (req, res) => {
    res.send("Server is up and connected to mongo db")
  })

  app.listen(port, () => {
    console.log("Server is up and connected to mongo db")
  })

  getPlaces(app, mongoDatabase)
  addPlace(app, mongoDatabase)
  checkIfPlaceExists(app, mongoDatabase)
  lovePlace(app, mongoDatabase)
  unlovePlace(app, mongoDatabase)
}

main()
