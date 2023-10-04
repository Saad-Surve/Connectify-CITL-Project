
import Thread from "@/lib/models/thread.models";
import User from "@/lib/models/user.models";
import { connectToDB } from "@/lib/mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req : Request, res:Response) {
    const body = await req.json()
    const { text, author, communityId } = body;

    try {
        connectToDB();

        const createdThread = await Thread.create({
            text,
            author,
            community : null,
        })
        
        await User.findByIdAndUpdate(author,{
            $push:{threads:createdThread._id}
        })

        return NextResponse.json({message:"Thread Created Succesfully"},{status:200})
    } catch (error: any) {
        return NextResponse.json({message:`Error creating thread ${error.message}`},{status:400})
    }
} 
