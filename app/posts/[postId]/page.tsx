import Comment from "@/app/_components/Comment";
import Emoji from "@/app/_components/Emoji";
import UserCard from "@/app/_components/UserCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MedalIcon, SendIcon } from "lucide-react";

const PostPage = ({ params }: { params: { postId: string } }) => {
    return (
        <main className="max-w-5xl m-auto mt-10 px-5 lg:px-0">
            <div className="flex space-x-5">
                <div className="lg:w-3/4">
                    <div className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-1">
                            <Avatar className="h-9 w-9 mr-1">
                                <AvatarImage src="/avatars/woman/8.png" />
                                <AvatarFallback>RP</AvatarFallback>
                            </Avatar>
                            <span className="text-lg font-semibold">
                                red-panda
                            </span>
                            <span className="text-sm text-muted-foreground">
                                at
                            </span>
                            <span
                                className="text-sm text-muted-foreground hover:text-current hover:cursor-pointer"
                                title="18th November, 2024 at 12:34 PM"
                            >
                                12:34 PM
                            </span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <h1 className="text-2xl font-bold">
                                <span>What happened that day?</span>
                            </h1>
                        </div>
                        <div>
                            <p className="text-justify">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Enim quibusdam pariatur saepe
                                repellat illo soluta ipsum cumque voluptatem
                                perferendis repellendus! Ipsum quam molestiae
                                numquam rerum voluptatem tempora quas
                                consequuntur modi. Lorem ipsum dolor sit amet
                                consectetur, adipisicing elit. Numquam, porro ea
                                ducimus veniam dicta praesentium dolore suscipit
                                a similique, asperiores dignissimos facere ipsam
                                autem, hic animi quaerat repellat nostrum
                                officiis! Lorem ipsum dolor sit amet
                                consectetur, adipisicing elit. At quam
                                repellendus doloribus reiciendis quibusdam
                                adipisci aut totam impedit?{params.postId}
                            </p>
                        </div>
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
                        </div>
                        <div className="flex space-x-2">
                            <Input
                                placeholder="Enter your comment..."
                                type="text"
                                className="rounded-full"
                            />
                            <Button className="rounded-full">
                                <SendIcon />
                                <span>Comment</span>
                            </Button>
                        </div>
                        <div>
                            <Comment />
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block lg:w-1/4">
                    <div className="border flex flex-col space-y-5 py-4 px-4 rounded-3xl">
                        <h1 className="text-xl font-bold flex items-center">
                            <MedalIcon className="h-6 w-6 mr-2" />
                            Top Users
                        </h1>
                        <div className="flex flex-col space-y-2">
                            <UserCard />
                            <UserCard />
                            <UserCard />
                            <UserCard />
                            <UserCard />
                            <UserCard />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default PostPage;
