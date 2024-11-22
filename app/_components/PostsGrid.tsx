"use client";

import { useSession } from "next-auth/react";
import PostCard from "./PostCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Teko } from "next/font/google";
import PostSkeleton from "./PostSkeleton";
import { useEffect, useState } from "react";
import { PostData } from "@/lib/utils";
// import { getServerSession } from "next-auth";
// import { options } from "../api/auth/[...nextauth]/options";
// import { notFound } from "next/navigation";

const teko = Teko({
    subsets: ["latin"],
    display: "swap",
});

const PostsGrid = () => {
    const { status } = useSession({
        required: false,
    });

    // const session = await getServerSession(options);
    // const foundPosts = await getPosts();
    // if (!foundPosts.posts) {
    //     notFound();
    // }

    const [data, setData] = useState<PostData>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsData = await fetch(
                    `${process.env.NEXT_PUBLIC_APP_URL}/api/posts`
                );
                const data: PostData = await postsData.json();
                setData(data);
            } catch (error) {
                setError("Error loading posts => " + error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <>
            {status === "authenticated" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {data?.posts?.map((post, index) => (
                        <PostCard
                            key={index}
                            post={post}
                        />
                    ))}
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
            {(status === "loading" || loading) && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <PostSkeleton />
                    <PostSkeleton />
                    <PostSkeleton />
                    <PostSkeleton />
                </div>
            )}
            {error && <>{error}</>}
            {/* {session && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {foundPosts?.posts?.map((post, index) => (
                        <PostCard
                            key={index}
                            post={post}
                        />
                    ))}
                </div>
            )}
            {!session && (
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
            )} */}
        </>
    );
};

export default PostsGrid;
