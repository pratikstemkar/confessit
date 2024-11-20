import User from "@/lib/models/user.model";
import { dbConnect } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
    req: NextRequest,
    { params }: { params: { username: string; postId: string } }
) {
    try {
        // Connect to the database
        await dbConnect();

        // Find the user by username and pull the postId from bookmarks
        const user = await User.findOneAndUpdate(
            { username: params.username }, // Find the user by their username
            {
                $pull: { bookmarks: params.postId }, // Remove the postId from the bookmarks array
            },
            { new: true } // Return the updated user document
        ).exec();

        if (!user) {
            return NextResponse.json(
                { message: "User not found." },
                { status: 404 }
            );
        }

        // Return the updated bookmarks
        return NextResponse.json(
            {
                message: "Bookmark removed successfully.",
                bookmarks: user.bookmarks,
            },
            { status: 200 }
        );
    } catch (e) {
        return NextResponse.json({ message: "Error: " + e }, { status: 500 });
    }
}
