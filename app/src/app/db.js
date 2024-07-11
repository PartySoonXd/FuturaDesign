const user = process.env.COUCHDB_USER
const password = process.env.COUCHDB_PASSWORD
const host = process.env.COUCHDB_HOST

const nano = require('nano')(`http://${user}:${password}@${host}:5984`);

const db = nano.db.use(process.env.COUCHDB_NAME)

export default db