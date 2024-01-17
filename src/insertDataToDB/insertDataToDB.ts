import { connectToMongoDB } from "../config/database"
// import data from "./oysterData.json"
import fs from "fs/promises"

type restaurantDataType = {
  name: string
  lat: number
  lng: number
  address: string
  phone: number
  notes: string
  link: string
  googleMapLink: string
}

const main = async () => {
  const data = await fs.readFile("./src/insertDataToDB/oysterData2.json", {
    encoding: "utf-8",
  })
  const dataArr = JSON.parse(data)

  dataArr.map((each: restaurantDataType) => {
    insertDataToDb(each)
  })
  return
}

const insertDataToDb = async (data: restaurantDataType) => {
  const mongoClient = await connectToMongoDB()
  const mongoDatabase = mongoClient.db("mydb")
  const oysterPlacesCollection = mongoDatabase.collection("dollaroysterplaces")

  const result = await oysterPlacesCollection.insertOne(data)
  console.log("RESULT: ", result)
}

main()
// run ts script from root folder
// pnpm ts-node ./src/insertDataToDB/insertDataToDB.ts
