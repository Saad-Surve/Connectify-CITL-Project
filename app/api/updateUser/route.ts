
import User from "@/lib/models/user.models";
import { connectToDB } from "@/lib/mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req : Request, res:Response) {
    const body = await req.json()
    const { userId, username, name, bio, image, path } = body;

    try {
      connectToDB();
      await User.findOneAndUpdate(
        { id: userId },
        {
          username: username.toLowerCase(),
          name,
          bio,
          image,
          onboarded: true,
        },
        { upsert: true }
      );
      return NextResponse.json({ message: "User updated successfully" },{status:200});
    } catch (error:any) {
      return NextResponse.json({ message: `Failed to create/update user: ${error.message}` },{status:500})
    }
} 
