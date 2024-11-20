import Post from "@/lib/models/post.model";
import { dbConnect } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
    req: NextRequest,
    { params }: { params: { postId: string } }
) {
    const { userId, text } = await req.json();

    try {
        await dbConnect();
        const post = await Post.findByIdAndUpdate(
            params.postId,
            {
                $push: {
                    comments: {
                        user: userId,
                        text: text,
                        createdAt: new Date(),
                    },
                },
            },
            { new: true } // Return the updated post document
        ).exec();
        return NextResponse.json(
            { message: "Comment Added to Post.", post: post },
            { status: 201 }
        );
    } catch (e) {
        return NextResponse.json({ message: "Error: " + e }, { status: 500 });
    }
}
