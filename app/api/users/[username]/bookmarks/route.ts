import Post from "@/lib/models/post.model";
import { dbConnect } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    req: NextRequest,
    { params }: { params: { username: string } }
) {
    try {
        // Connect to the database
        await dbConnect();

        // Find the user by username and populate the bookmarks field with post details
        const user = await Post.findOne({ username: params.username })
            .populate("bookmarks") // Populate the bookmarks with Post data
            .exec();

        if (!user) {
            return NextResponse.json(
                { message: "User not found." },
                { status: 404 }
            );
        }

        // Return the bookmarks (which will be the populated post objects)
        return NextResponse.json(
            {
                message: "User's bookmarks fetched successfully.",
                bookmarks: user.bookmarks,
            },
            { status: 200 }
        );
    } catch (e) {
        return NextResponse.json({ message: "Error: " + e }, { status: 500 });
    }
}
