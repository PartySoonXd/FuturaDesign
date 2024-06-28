const nano = require('nano')(process.env.COUCHDB_URL);

const db = nano.use(process.env.COUCHDB_NAME)

export default db