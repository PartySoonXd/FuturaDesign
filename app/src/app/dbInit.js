require('dotenv').config({path: ".env.local"})

const user = process.env.COUCHDB_USER
const password = process.env.COUCHDB_PASSWORD
const host = process.env.COUCHDB_HOST

const nano = require('nano')(`http://${user}:${password}@${host}:5984`);

nano.db.create(process.env.COUCHDB_NAME).then(data => {
    console.log("Database created successfully")
    process.exit()
}).catch(error => {
    console.log(error)
    process.exit()
})
