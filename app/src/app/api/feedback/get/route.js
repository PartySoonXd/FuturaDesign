import { NextResponse } from "next/server";

import db from "@/app/db";

export const dynamic = 'force-dynamic';

export async function GET() {
    const docs = []
    const data = await db.list({include_docs: true}).then(data => {
        return data.rows
    })
    data.forEach(item => {
        docs.push(item.doc)
    })
    docs.forEach((item, i) => {
        item['id'] = i
        delete item["_id"]
    })
    return NextResponse.json(docs)
}