import Post from "@/lib/models/post.model";
import { dbConnect } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
    req: NextRequest,
    { params }: { params: { postId: string; commentId: string } }
) {
    try {
        await dbConnect();

        const post = await Post.findByIdAndUpdate(
            params.postId,
            {
                $pull: { comments: { _id: params.commentId } },
            },
            { new: true }
        ).exec();

        if (post) {
            return NextResponse.json(
                { message: "Comment Deleted from Post.", post: post },
                { status: 200 }
            );
        } else {
            return NextResponse.json(
                { message: "Post not found or comment not found." },
                { status: 404 }
            );
        }
    } catch (e) {
        return NextResponse.json({ message: "Error: " + e }, { status: 500 });
    }
}
