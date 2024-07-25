import { v4 as uuidv4 } from 'uuid';
import path from "path"
import fs from 'fs'
import { NextResponse } from 'next/server';


export async function POST(request) {
    try {
        const formData = await request.formData()
        const category = formData.get('category')
        const file = formData.get('picture') 

        if (file.size === 0 || category === null || category === "category") {
            return NextResponse.json({text: "File or category is undefined"}, {status: 400})
        }

        const fileName = uuidv4() + ".jpeg"
        const folderPath = path.resolve("public", 'images', 'portfolio', category)

        if (!fs.existsSync(folderPath)){
            fs.mkdirSync(folderPath, { recursive: true });
        }
        
        fs.writeFile(path.resolve(folderPath, fileName), Buffer.from(await file.arrayBuffer()), (err) => {
            if (err) throw err;
        }); 

        return NextResponse.json({text: "Image was added"}, {status: 200})
    } catch (error) {
        console.log(error.message)
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