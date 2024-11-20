import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import User from "@/lib/models/user.model";

export async function GET(
    req: NextRequest,
    { params }: { params: { username: string } }
) {
    const username = params.username;
    try {
        await dbConnect();
        const user = await User.findOne({ username }).exec();
        return NextResponse.json(
            { message: "User found!", user },
            { status: 200 }
        );
    } catch (e) {
        return NextResponse.json({ message: "Error: " + e }, { status: 500 });
    }
}
