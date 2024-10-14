const PortfolioService = require('../services/PortfolioService')

class PortfolioController {
    async create(req, res, next) {
        try {
            const { category } = req.body
            const { file } = req.files
    
            await PortfolioService.create(category, file)

            return res.json({message: "Image was added", title: "Success!"})
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next) {
        try {
            const { name } = req.params
            const { category } = req.query
    
            await PortfolioService.delete(name, category)
    
            return res.json({message: "Image was deleted"})
        } catch (error) {
            next(error)
        }
    }

    async getInCategory(req, res, next) {
        try {
            const { category } = req.query
    
            const files = await PortfolioService.getInCategory(category)
    
            return res.json(files)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new PortfolioController()