import Post from "@/lib/models/post.model";
import { dbConnect } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
    req: NextRequest,
    { params }: { params: { postId: string } }
) {
    const { reactionType } = await req.json();

    try {
        await dbConnect();

        const validReactions = ["hot", "funny", "shock"];
        if (!validReactions.includes(reactionType)) {
            return NextResponse.json(
                { message: "Invalid reaction type." },
                { status: 400 }
            );
        }

        const post = await Post.findByIdAndUpdate(
            params.postId,
            {
                $inc: { [`reactions.${reactionType}`]: 1 },
            },
            { new: true }
        ).exec();

        if (post) {
            return NextResponse.json(
                {
                    message: `${reactionType} reaction added to post.`,
                    post: post,
                },
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
    const { reactionType } = await req.json();
    try {
        await dbConnect();

        const validReactions = ["hot", "funny", "shock"];
        if (!validReactions.includes(reactionType)) {
            return NextResponse.json(
                { message: "Invalid reaction type." },
                { status: 400 }
            );
        }

        const post = await Post.findByIdAndUpdate(
            params.postId,
            {
                $inc: { [`reactions.${reactionType}`]: -1 },
            },
            { new: true }
        ).exec();

        if (post) {
            return NextResponse.json(
                {
                    message: `${reactionType} reaction removed from post.`,
                    post: post,
                },
                { status: 200 }
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
