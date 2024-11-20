"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Emoji from "./Emoji";
import PostMenu from "./PostMenu";
// import CommentsDialog from "./CommentsDialog";
import Link from "next/link";
import { toast } from "sonner";

const PostCard = () => {
    return (
        <div className={`px-4 py-4 rounded-3xl border`}>
            <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-center">
                    <div className="flex space-x-2 items-center">
                        <Link
                            href="/users/red-panda"
                            className="flex space-x-1 items-center"
                            scroll={false}
                            title="Visit Profile"
                        >
                            <Avatar>
                                <AvatarImage
                                    src="/avatars/woman/8.png"
                                    className="h-9 w-9"
                                />
                                <AvatarFallback>PFP</AvatarFallback>
                            </Avatar>
                            <span className="font-semibold text-md lg:text-lg">
                                red-panda
                            </span>
                        </Link>
                        <span
                            className="text-xs text-muted-foreground hover:cursor-pointer hover:text-current"
                            title="18th November, 2024 at 12:34 PM"
                        >
                            at 12:24 PM
                        </span>
                    </div>
                    <div>
                        <PostMenu />
                    </div>
                </div>
                <div>
                    <Link
                        href="/posts/1"
                        title="Open Post"
                        passHref
                    >
                        <span className="font-bold tracking-tighter text-lg lg:text-xl">
                            What happened that day?
                        </span>
                        <div>
                            <p className="text-justify line-clamp-4">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Necessitatibus voluptatibus
                                voluptatum asperiores dolorum placeat eligendi
                                nemo odio, distinctio minima labore similique
                                facilis, tempora cumque, possimus voluptatem a
                                veritatis quo esse.
                            </p>
                        </div>
                    </Link>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-wrap gap-2">
                        {/* <Button
                        variant="ghost"
                        className="rounded-full hover:border border-primary"
                    >
                        <Emoji
                            symbol="❤️"
                            label="heart"
                        />
                    </Button> */}
                        <Button
                            variant="ghost"
                            className="rounded-full"
                            title="Hot"
                        >
                            <Emoji
                                symbol="🔥"
                                label="fire"
                            />
                        </Button>
                        <Button
                            variant="ghost"
                            className="rounded-full"
                            title="Funny"
                            onClick={() => toast("Haha")}
                        >
                            <Emoji
                                symbol="😂"
                                label="funny"
                            />
                        </Button>
                        <Button
                            variant="ghost"
                            className="rounded-full"
                            title="Shock"
                        >
                            <Emoji
                                symbol="😱"
                                label="scare"
                            />
                        </Button>
                        {/* <CommentsDialog /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
