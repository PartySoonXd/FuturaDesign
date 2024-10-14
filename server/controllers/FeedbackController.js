const FeedbackService = require('../services/FeedbackService')

class FeedbackController {
    async create(req, res, next) {
        try {
            const {name, email, phone, message} = req.body
    
            await FeedbackService.create(name, phone, email, message)
    
            return res.json({message: "Thanks for your letter! We answer you soon."})
        } catch (error) {
            next(error)
        }
    }

    async get(req, res, next) {
        try {
            const docs = []
            const data = await FeedbackService.get()

            data.forEach(item => {
                docs.push(item.doc)
            })
            docs.forEach((item, i) => {
                item['id'] = i
                delete item["_id"]
            })

            return res.json(docs)
        } catch (error) {
            next(error)
        }

    }
}

module.exports = new FeedbackController()