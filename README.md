pnpm init
create .gitignore
pnpm install express
pnpm i --save-dev @types/express
pnpm install ts-node
pnpm install @types/node@"\*"
pnpm install typescript@>=2.7

update pkg.json : start: pnpm ts-node ./src/App.ts

pnpm install @types/mongodb
pnpm install mongodb

- create mongo db
- mongosh: connect to mongo db
- show dbs: show all db
- use dbName: use the db with dbName
- show collections: show all collection
- delete collection: db.collectionName.drop()
- db.createCollection("collectionName"): create a new collection
  -- delete collection: db.collectionName.deleteMany({})
  db.createCollection("dollaroysterplaces")

-- add data to dollaroysterplaces
db.dollaroysterplaces.insertOne({id: '111', name: 'test', lat: 12, lng: 22, address: 'test address', phone: 123, notes: 'test notes', link: 'www.google.com', googleMapLink: 'https://www.google.com/maps/place/Thirsty+Scholar+Pub/@42.376311,-71.104222,17z/data=!3m1!4b1!4m6!3m5!1s0x89e3774970eb475d:0xf295081f4049d37!8m2!3d42.376311!4d-71.104222!16s%2Fg%2F1tgb8c4b?entry=ttu'})

db.dollaroysterplaces.find({})
