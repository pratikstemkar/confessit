import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import User from "@/lib/models/user.model";
import bcrypt from "bcrypt";
import { getRandomNumber } from "@/lib/utils";

export async function POST(req: NextRequest) {
    const { username, bio, password, location, from, music, movie, gender } =
        await req.json();
    const user = {
        username,
        bio,
        password: (await bcrypt.hash(password, 10)).toString(),
        location,
        from,
        music,
        movie,
        gender,
        avatar: `/avatars/${gender}/${
            gender === "man" ? getRandomNumber(20) : getRandomNumber(24)
        }.png`,
    };

    try {
        await dbConnect();
        await User.create(user);
        return NextResponse.json(
            { message: "User Added to DB." },
            { status: 201 }
        );
    } catch (e) {
        return NextResponse.json({ message: "Error: " + e }, { status: 500 });
    }
}

export async function GET() {
    try {
        await dbConnect();
        const users = await User.find({});
        return NextResponse.json(
            { message: "Users Found!", users },
            { status: 200 }
        );
    } catch (e) {
        return NextResponse.json({ message: "Error: " + e }, { status: 500 });
    }
}
