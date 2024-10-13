const Router = require('express').Router
const router = new Router()

const portfolioController = require('../controllers/PortfolioController')

router.use('/create', portfolioController.create)
router.use('/delete/:id', portfolioController.delete)
router.use('/get/:name', portfolioController.get)
router.use('/get-in-category', portfolioController.getInCategory)

module.exports = router