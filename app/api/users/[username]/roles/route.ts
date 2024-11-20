import User from "@/lib/models/user.model";
import { dbConnect } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
    req: NextRequest,
    { params }: { params: { username: string } }
) {
    const { role } = await req.json(); // Extract the role from the request body

    try {
        // Connect to the database
        await dbConnect();

        // Validate role
        const validRoles = ["user", "admin", "moderator"];
        if (!validRoles.includes(role)) {
            return NextResponse.json(
                { message: "Invalid role." },
                { status: 400 }
            );
        }

        // Add the role to the user's roles array, only if it's not already present
        const user = await User.findOneAndUpdate(
            { username: params.username },
            {
                $addToSet: { roles: role }, // $addToSet ensures the role is added only if it doesn't already exist
            },
            { new: true } // Return the updated user document
        ).exec();

        if (!user) {
            return NextResponse.json(
                { message: "User not found." },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                message: `Role '${role}' added successfully.`,
                roles: user.roles,
            },
            { status: 200 }
        );
    } catch (e) {
        return NextResponse.json({ message: "Error: " + e }, { status: 500 });
    }
}

export async function DELETE(
    req: NextRequest,
    { params }: { params: { username: string } }
) {
    const { role } = await req.json(); // Extract the role to be removed from the request body

    try {
        // Connect to the database
        await dbConnect();

        // Validate role
        const validRoles = ["user", "admin", "moderator"];
        if (!validRoles.includes(role)) {
            return NextResponse.json(
                { message: "Invalid role." },
                { status: 400 }
            );
        }

        // Remove the role from the user's roles array
        const user = await User.findOneAndUpdate(
            { username: params.username },
            {
                $pull: { roles: role }, // $pull removes the specified role from the array
            },
            { new: true } // Return the updated user document
        ).exec();

        if (!user) {
            return NextResponse.json(
                { message: "User not found." },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                message: `Role '${role}' removed successfully.`,
                roles: user.roles,
            },
            { status: 200 }
        );
    } catch (e) {
        return NextResponse.json({ message: "Error: " + e }, { status: 500 });
    }
}
