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

  getPlaces(app, mongoDatabase)
  addPlace(app, mongoDatabase)
  checkIfPlaceExists(app, mongoDatabase)
  lovePlace(app, mongoDatabase)
  unlovePlace(app, mongoDatabase)
}

main()
