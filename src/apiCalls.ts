import { Db } from "mongodb"
import { v4 as uuidv4 } from "uuid"
import { DateTime } from "luxon"

export const getPlaces = (app: any, database: Db) => {
  const oysterPlacesCollection = database.collection("dollaroysterplaces")

  app.get("/getplaces", async (req: any, res: any) => {
    const result = await oysterPlacesCollection.find({}).toArray()

    if (result.length > 0) {
      res.json({ success: true, data: result })
    } else {
      res.json({ success: false })
    }
  })
}

export const checkIfPlaceExists = (app: any, database: Db) => {
  const oysterPlacesCollection = database.collection("dollaroysterplaces")

  app.post("/checkplace", async (req: any, res: any) => {
    const placeData = req.body
    console.log(
      "Check if place exist in db: ",
      placeData.name,
      placeData.address
    )
    const existingPlace = await oysterPlacesCollection.findOne({
      name: placeData.name,
      address: placeData.address,
    })
    if (existingPlace) {
      console.log("exists")
      res.json({ success: true, result: "Place already exists in database." })
      return false
    } else {
      console.log("not exists")
      res.json({ success: false, result: "Place does not exists in database." })
      return false
    }
  })
}

export const addPlace = (app: any, database: Db) => {
  const oysterPlacesCollection = database.collection("dollaroysterplaces")

  app.post("/addplace", async (req: any, res: any) => {
    const formData = req.body

    const existingPlace = await oysterPlacesCollection.findOne({
      name: formData.name,
      address: formData.address,
    })

    if (existingPlace) {
      console.log("ALreay exists")
      res.json({ success: false, result: existingPlace })
      return
    } else {
      const id = uuidv4()
      const date = DateTime.now()

      const newPlace = {
        id: id,
        date: date,
        name: formData.name,
        link: formData.link,
        lat: formData.lat,
        lng: formData.lng,
        address: formData.address,
        notes: formData.notes,
        days: formData.days,
        from: formData.from,
        to: formData.to,
      }
      const result = await oysterPlacesCollection.insertOne(newPlace)
      res.json({ success: true, result: result })
    }
  })
}

export const lovePlace = (app: any, database: Db) => {
  const oysterPlacesCollection = database.collection("dollaroysterplaces")
  app.post("/love", async (req: any, res: any) => {
    const data = req.body
    console.log("Place ID: ", data.id)
    const filter = { id: data.id }
    const update = { $inc: { love: 1 } }
    const result = await oysterPlacesCollection.updateOne(filter, update)

    console.log("RESULT: ", result)
    res.json({ "Love place result: ": result })
  })
}
