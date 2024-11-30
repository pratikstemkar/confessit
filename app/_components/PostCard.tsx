"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Emoji from "./Emoji";
import PostMenu from "./PostMenu";
import Link from "next/link";
import { formatDate, sendReaction, timeAgo } from "@/lib/utils";
import ShareButton from "./ShareButton";

interface Reaction {
    hot: number;
    funny: number;
    shock: number;
}

interface Author {
    _id: string;
    username: string;
    avatar: string;
}

interface Comment {
    user: string;
    text: string;
    createdAt: string;
}

export interface Post {
    reactions: Reaction;
    _id: string;
    title: string;
    content: string;
    author: Author;
    mood: "excited" | "happy" | "sad" | "angry" | "shocked" | "neutral";
    comments: Comment[];
    reports: string[];
    createdAt: string;
    updatedAt: string;
    __v: number;
}

const PostCard = (props: { post: Post }) => {
    return (
        <div
            className={`px-4 py-4 rounded-3xl border hover:shadow-xl hover:scale-105 ease-in-out duration-300`}
        >
            <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-x-2 items-center">
                        <Link
                            href={`/users/${props.post.author.username}`}
                            className="flex space-x-1 items-center"
                            scroll={false}
                            title="Visit Profile"
                        >
                            <Avatar>
                                <AvatarImage
                                    src={props.post.author.avatar}
                                    className="h-9 w-9"
                                />
                                <AvatarFallback>PFP</AvatarFallback>
                            </Avatar>
                            <span className="font-semibold text-md lg:text-lg">
                                {props.post.author.username}
                            </span>
                        </Link>
                        <span
                            className="text-xs text-muted-foreground hover:cursor-pointer hover:text-current"
                            title={formatDate(props.post.createdAt)}
                        >
                            {timeAgo(props.post.createdAt)}
                        </span>
                    </div>
                    <div>
                        <PostMenu authorId={props.post.author._id} />
                    </div>
                </div>
                <Link
                    href={`/posts/${props.post._id}`}
                    title="Open Post"
                    passHref
                >
                    <div>
                        <span className="font-bold tracking-tighter text-lg lg:text-xl">
                            {props.post.title}
                        </span>
                        <div>
                            <p className="text-justify line-clamp-4">
                                {props.post.content}
                            </p>
                        </div>
                    </div>
                </Link>
                <div className="flex justify-between">
                    <div className="flex flex-wrap gap-1 lg:gap-2">
                        <Button
                            variant="ghost"
                            className="rounded-full"
                            title="Hot"
                            onClick={() => sendReaction(props.post._id, "hot")}
                        >
                            <span>{props.post.reactions.hot}</span>
                            <Emoji
                                symbol="🔥"
                                label="fire"
                            />
                        </Button>
                        <Button
                            variant="ghost"
                            className="rounded-full"
                            title="Funny"
                            onClick={() =>
                                sendReaction(props.post._id, "funny")
                            }
                        >
                            <span>{props.post.reactions.funny}</span>
                            <Emoji
                                symbol="😂"
                                label="funny"
                            />
                        </Button>
                        <Button
                            variant="ghost"
                            className="rounded-full"
                            title="Shock"
                            onClick={() =>
                                sendReaction(props.post._id, "shock")
                            }
                        >
                            <span>{props.post.reactions.shock}</span>
                            <Emoji
                                symbol="😱"
                                label="scare"
                            />
                        </Button>
                        <ShareButton postId={props?.post._id} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
