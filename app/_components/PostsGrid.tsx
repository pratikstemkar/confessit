"use client";

import { useSession } from "next-auth/react";
import PostCard from "./PostCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Teko } from "next/font/google";
import PostSkeleton from "./PostSkeleton";

const teko = Teko({
    subsets: ["latin"],
    display: "swap",
});

const PostsGrid = () => {
    const { status } = useSession({
        required: false,
    });

    return (
        <>
            {status === "authenticated" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </div>
            )}
            {status === "unauthenticated" && (
                <div className="flex flex-col w-full space-y-5 justify-center mt-28">
                    <div className="text-center">
                        <h1
                            className={`text-2xl lg:text-4xl font-extrabold ${teko.className}`}
                        >
                            <span className="text-4xl lg:text-6xl">
                                Curiosity calls!
                            </span>
                            <br />
                            Create an{" "}
                            <span
                                className="text-primary hover:underline hover:cursor-pointer underline-offset-4"
                                title="No one would know who you are. Not even us!"
                            >
                                Anonymous Profile
                            </span>{" "}
                            to see what everyone&apos;s confessing.
                        </h1>
                        <h2
                            className={`text-xl lg:text-2xl font-bold ${teko.className}`}
                        >
                            You&apos;ll thank us later – the secrets are worth
                            it!
                        </h2>
                    </div>
                    <div className="flex justify-center">
                        <Button
                            className="rounded-full"
                            asChild
                        >
                            <Link href="/create-profile">
                                Create Anonymous Profile
                            </Link>
                        </Button>
                    </div>
                </div>
            )}
            {status === "loading" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <PostSkeleton />
                    <PostSkeleton />
                    <PostSkeleton />
                    <PostSkeleton />
                </div>
            )}
        </>
    );
};

export default PostsGrid;
