import { connectToMongoDB } from "../config/database"
// import data from "./oysterData.json"
import fs from "fs/promises"

const insertDataToDb = async () => {
  // const mongoClient = await connectToMongoDB()
  // const mongoDatabase = mongoClient.db("mydb")
  // const oysterPlacesCollection = mongoDatabase.collection("dollaroysterplaces")

  const data = await fs.readFile("./src/insertDataToDB/oysterData.json", {
    encoding: "utf-8",
  })
  console.log("DATA: ", JSON.parse(data))
}

insertDataToDb()
// run ts script from root folder
// pnpm ts-node ./src/insertDataToDB/insertDataToDB.ts
