import { Post } from "@/app/_components/PostCard";
import { format, formatDistanceToNow } from "date-fns";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
    uniqueNamesGenerator,
    Config,
    adjectives,
    colors,
    animals,
} from "unique-names-generator";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getRandomNumber(range: number): number {
    return Math.floor(Math.random() * range) + 1;
}

export function generateUniqueUsername(): string {
    // Define configuration for the username generator
    const config: Config = {
        dictionaries: [adjectives, colors, animals], // Use adjectives, colors, and animals dictionaries
        separator: "-", // Choose a separator for words
        length: 2, // Number of words in the generated username
        style: "lowerCase", // Style of words in the username (lowercase)
    };

    // Generate the username based on the config
    return uniqueNamesGenerator(config);
}

export async function getUser(username: string) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/users/${username}`,
        {
            next: { revalidate: 60 },
        }
    );
    if (!res.ok) {
        throw new Error("User not Found!");
    }

    return res.json();
}

export async function getUsers() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/users`, {
        next: { revalidate: 60 },
    });
    if (!res.ok) {
        throw new Error("Users not Found!");
    }

    return res.json();
}

export interface PostData {
    message: string;
    posts: Array<Post>;
}

export async function getPosts(): Promise<PostData> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/posts`, {
        next: { revalidate: 60 },
    });
    if (!res.ok) {
        throw new Error("Posts not Found!");
    }

    return res.json();
}

export async function getPost(postId: string) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/posts/${postId}`,
        {
            next: { revalidate: 60 },
        }
    );
    if (!res.ok) {
        throw new Error("Post not Found!");
    }

    return res.json();
}

export function timeAgo(date: string | Date): string {
    const parsedDate = new Date(date);

    return formatDistanceToNow(parsedDate) + " ago";
}

export function formatDate(dateString: string): string {
    const date = new Date(dateString);

    return format(date, "MMMM dd, yyyy, hh:mm a");
}

export const sendReaction = async (postId: string, reactionType: string) => {
    try {
        const response = await fetch(`/api/posts/${postId}/reactions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ reactionType }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Failed to add reaction");
        }

        return data;
    } catch (error) {
        console.error("Error sending reaction:", error);
        throw error;
    }
};
