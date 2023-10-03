
import User from "@/lib/models/user.models";
import { connectToDB } from "@/lib/mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req : NextRequest) {
    const userId = req.nextUrl.searchParams.get("userId")
    try {
        connectToDB()
        const user = await User
        .findOne({id:userId})
        // .populate({
        //     path:'communities',
        //     model:Community
        // })
        return NextResponse.json(user,{status:200})
    } catch (error:any) {
        return NextResponse.json({message:`Failed to fetch user ${error.message}`},{status:200})
    }
    
} 
