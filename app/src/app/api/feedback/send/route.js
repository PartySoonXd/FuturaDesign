import { NextResponse } from "next/server";

import db from "@/app/db";

export async function POST(req) {
    try {
        const formData = await req.formData()
        
        const name = formData.get("name")
        const phone = formData.get("phone")
        const email = formData.get("email")
        const message = formData.get("message")

        if (name === "" || email === "" || message === "") {
            return NextResponse.json({ error: 'Please fill all required fields.' }, { status: 400 })
        }
        await db.insert({name, phone, email, message})
    
        return NextResponse.json(
            {message: "Thanks for your letter! We answer you soon."},
            {status: 200}
        )
    } catch (error) {
        console.log(error)
    }
}