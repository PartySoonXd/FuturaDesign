import fs from "fs"
import { NextResponse } from "next/server"
import path from "path"

export async function DELETE(req) {
    try {
        const searchParams = req.nextUrl.searchParams
        const name = searchParams.get('name')
        const category = searchParams.get('category')

        const folderPath = path.resolve('public', 'images', 'portfolio', category)

        fs.rmSync(folderPath + "/" + name)
        
        return NextResponse.json({"text": "success"})
    } catch (error) {
        console.log(error)        
    }
}

export async function OPTIONS(req) {
    const origin = req.headers.get('origin')

    return new NextResponse(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': origin || '*',
            'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    })
}