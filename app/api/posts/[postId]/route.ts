import Post from "@/lib/models/post.model";
import { dbConnect } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    req: NextRequest,
    { params }: { params: { postId: string } }
) {
    const postId = params.postId;
    try {
        await dbConnect();
        const post = await Post.findOne({ _id: postId })
            .populate("author", "_id username avatar")
            .populate("comments.user", "_id username avatar")
            .exec();
        return NextResponse.json(
            { message: "Post found!", post },
            { status: 200 }
        );
    } catch (e) {
        return NextResponse.json({ message: "Error: " + e }, { status: 500 });
    }
}

export async function PUT(
    req: NextRequest,
    { params }: { params: { postId: string } }
) {
    const postId = params.postId;
    const updatedPost = await req.json();
    try {
        await dbConnect();
        await Post.findOneAndUpdate({ _id: postId }, updatedPost);
        return NextResponse.json({ message: "Post Updated!" }, { status: 200 });
    } catch (e) {
        return NextResponse.json(
            { message: "Post not Updated! Error: " + e },
            { status: 500 }
        );
    }
}

export async function DELETE(
    req: NextRequest,
    { params }: { params: { postId: string } }
) {
    const postId = params.postId;
    try {
        await dbConnect();
        await Post.findOneAndDelete({ _id: postId });
        return NextResponse.json({ message: "Post Deleted!" }, { status: 200 });
    } catch (e) {
        return NextResponse.json(
            { message: "Post not deleted! Error: " + e },
            { status: 500 }
        );
    }
}
