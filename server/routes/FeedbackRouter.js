const Router = require('express').Router
const router = new Router()

const feedbackController = require('../controllers/FeedbackController')

router.use("/create", feedbackController.create)
router.use("/get", feedbackController.get)


module.exports = router