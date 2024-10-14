const db = require('../db')

class FeedbackService {
    async create(name, phone, email, message) {
        await db.insert({name, phone, email, message})
    }

    async get() {
        const data = await db.list({include_docs: true})

        return data.rows
    }
}

module.exports = new FeedbackService()