import client from "@/db";


import { NextRequest, NextResponse } from "next/server";



interface PostData {
    userId:string;
    title:string;
    content:string;
   
}

export async function POST(req: NextRequest) {
    try {
        // Parse request body
        const postdata: PostData = await req.json();
   
        const newPost = await client.post.create({
            data: {
                authorId: postdata.userId,
                title: postdata.title,
                content: postdata.content,
            },
        });
    } catch (error: any) {
        console.error("Error processing request:", error);
        return NextResponse.json({ message: "Internal server error", status: 500 });
    }
}




