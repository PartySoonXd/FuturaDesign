const Router = require('express').Router
const router = new Router()

const portfolioController = require('../controllers/PortfolioController')

router.post('/create', portfolioController.create)
router.delete('/delete/:name', portfolioController.delete)
router.get('/get-in-category', portfolioController.getInCategory)

module.exports = router