import fs from "fs"
import { NextResponse } from "next/server"
import path from "path"

export const dynamic = 'force-dynamic'

export async function GET(req) {
    try {
        const files = []
        const { searchParams } = new URL(req.url)
        const category = searchParams.get('category')

        const folderPath = path.resolve('public', 'images', 'portfolio', category)

        if (!fs.existsSync(folderPath)){
            return NextResponse.json({files})
        }
        const fileNames = fs.readdirSync(folderPath)
        fileNames.forEach(item => {
            const file = fs.readFileSync(folderPath + "/" + item)
            files.push({file, name: item})
        })

        return NextResponse.json({files})
    } catch (error) {
        throw error        
    }
}