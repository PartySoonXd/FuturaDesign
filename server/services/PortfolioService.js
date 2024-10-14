const path = require('path')
const fs = require('fs')
const uuid = require('uuid')

class PortfolioService {
    async create(category, file) {
        const fileName = uuid.v4() + ".jpeg"
        const folderPath = path.join(__dirname, '..', 'static', 'images', 'portfolio', category)
        const imagePath = path.join(folderPath, fileName)

        if (!fs.existsSync(folderPath)){
            fs.mkdirSync(folderPath, { recursive: true });
        }
        
        fs.writeFileSync(imagePath, file.data)
    }

    async getInCategory(category) {
        let files = []
        const folderPath = path.join(__dirname, '..', 'static', 'images', 'portfolio', category)

        if (!fs.existsSync(folderPath)){
            return files
        }

        files = fs.readdirSync(folderPath)

        return files
    }

    async delete(name, category) {
        const filePath = path.join(__dirname, '..', 'static', 'images', 'portfolio', category, name)

        fs.rmSync(filePath)
    }
}

module.exports = new PortfolioService()