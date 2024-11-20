import Post from "@/lib/models/post.model";
import { dbConnect } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
    req: NextRequest,
    { params }: { params: { postId: string } }
) {
    const { userId, reason } = await req.json(); // Extract userId and reason from request body

    try {
        // Connect to the database
        await dbConnect();

        // Validate the reason (it should not be empty)
        if (!reason || reason.trim().length === 0) {
            return NextResponse.json(
                { message: "Reason for reporting is required." },
                { status: 400 }
            );
        }

        // Add the report to the post
        const post = await Post.findByIdAndUpdate(
            params.postId,
            {
                $push: {
                    reports: {
                        user: userId, // User who is reporting
                        reason: reason, // Reason for reporting
                        createdAt: new Date(), // Timestamp when the report is created
                    },
                },
            },
            { new: true } // Return the updated post document
        ).exec();

        if (post) {
            return NextResponse.json(
                { message: "Post has been reported.", post: post },
                { status: 201 }
            );
        } else {
            return NextResponse.json(
                { message: "Post not found." },
                { status: 404 }
            );
        }
    } catch (e) {
        return NextResponse.json({ message: "Error: " + e }, { status: 500 });
    }
}

export async function DELETE(
    req: NextRequest,
    { params }: { params: { postId: string } }
) {
    const { userId } = await req.json(); // Extract userId from request body

    try {
        // Connect to the database
        await dbConnect();

        // Remove the user's report from the post
        const post = await Post.findByIdAndUpdate(
            params.postId,
            {
                $pull: {
                    reports: { user: userId }, // Pull the report associated with this user
                },
            },
            { new: true } // Return the updated post document
        ).exec();

        if (post) {
            return NextResponse.json(
                { message: "Report removed from post.", post: post },
                { status: 200 }
            );
        } else {
            return NextResponse.json(
                { message: "Post not found or report not found." },
                { status: 404 }
            );
        }
    } catch (e) {
        return NextResponse.json({ message: "Error: " + e }, { status: 500 });
    }
}
