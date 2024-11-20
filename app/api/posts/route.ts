import Post from "@/lib/models/post.model";
import { dbConnect } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { title, content, author, mood } = await req.json();
    const post = {
        title,
        content,
        author,
        mood,
    };

    try {
        await dbConnect();
        await Post.create(post);
        return NextResponse.json(
            { message: "Post Added to DB." },
            { status: 201 }
        );
    } catch (e) {
        return NextResponse.json({ message: "Error: " + e }, { status: 500 });
    }
}

export async function GET() {
    try {
        await dbConnect();
        const posts = await Post.find({ reports: { $size: 0 } })
            .sort({ createdAt: -1 })
            .populate("author", "_id avatar username")
            .exec();
        return NextResponse.json(
            { message: "Posts Found!", posts },
            { status: 200 }
        );
    } catch (e) {
        return NextResponse.json({ message: "Error: " + e }, { status: 500 });
    }
}
