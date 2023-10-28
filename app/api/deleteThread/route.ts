import Thread from "@/lib/models/thread.models";
import User from "@/lib/models/user.models";
import { connectToDB } from "@/lib/mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextApiRequest) {
  const { threadId } = req.query; 

  try {
    connectToDB();

    const deletedThread = await Thread.findByIdAndDelete(threadId);

    if (!deletedThread) {
      return NextResponse.json({ message: "Thread not found" }, { status: 404 });
    }

    await User.findByIdAndUpdate(deletedThread.author, {
      $pull: { threads: threadId },
    });

    return NextResponse.json({ message: "Thread deleted successfully" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: `Error deleting thread: ${error.message}` },
      { status: 400 }
    );
  }
}
