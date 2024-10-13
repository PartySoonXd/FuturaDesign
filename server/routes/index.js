const Router = require('express').Router
const router = new Router()

const portfolioRouter = require('./PortfolioRouter')
const feedbackRouter = require('./FeedbackRouter')

router.use('/portfolio', portfolioRouter)
router.use('/feedback', feedbackRouter)

module.exports = router