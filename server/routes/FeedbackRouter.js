const Router = require('express').Router
const router = new Router()

const feedbackController = require('../controllers/FeedbackController')

router.post("/create", feedbackController.create)
router.get("/get", feedbackController.get)

module.exports = router