
import User from "@/lib/models/user.models";
import { connectToDB } from "@/lib/mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req : NextRequest, res:NextApiResponse) {
  console.log( await req.json())
    // const { userId, username, name, bio, image, path } = req.body;

    // try {
    //   connectToDB();
    //   await User.findOneAndUpdate(
    //     { id: userId },
    //     {
    //       username: username.toLowerCase(),
    //       name,
    //       bio,
    //       image,
    //       onboarded: true,
    //     },
    //     { upsert: true }
    //   );

    //   if (path === "/profile/edit") {
    //     revalidatePath(path);
    //   }

    //   NextResponse.json({ message: "User updated successfully" }).ok;
    // } catch (error:any) {
    //   console.log(error.message)
    //   // res.status(500).json({ message: `Failed to create/update user: ${error.message}` });
    // }
} 
