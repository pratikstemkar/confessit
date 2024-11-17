import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Emoji from "./Emoji";
import PostMenu from "./PostMenu";
import PostDialog from "./PostDialog";
import CommentsDialog from "./CommentsDialog";

const PostCard = () => {
    return (
        <div className="px-4 py-4 rounded-3xl border">
            <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-center">
                    <div className="flex space-x-2 items-center">
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
                        <span className="text-xs text-muted-foreground">
                            at 12:24 PM
                        </span>
                    </div>
                    <div>
                        <PostMenu />
                    </div>
                </div>
                <div>
                    <span className="font-bold tracking-tighter text-lg lg:text-xl">
                        What happened that day?
                    </span>
                    <div>
                        <p className="text-justify line-clamp-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Necessitatibus voluptatibus voluptatum
                            asperiores dolorum placeat eligendi nemo odio,
                            distinctio minima labore similique facilis, tempora
                            cumque, possimus voluptatem a veritatis quo esse.
                        </p>
                        <PostDialog />
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-wrap gap-2">
                        <Button
                            variant="ghost"
                            className="rounded-full hover:border border-primary"
                        >
                            <Emoji
                                symbol="❤️"
                                label="heart"
                            />
                        </Button>
                        {/* <Button
                            variant="ghost"
                            className="rounded-full"
                        >
                            <Emoji
                                symbol="🔥"
                                label="fire"
                            />
                        </Button> */}
                        <Button
                            variant="ghost"
                            className="rounded-full"
                        >
                            <Emoji
                                symbol="😂"
                                label="funny"
                            />
                        </Button>
                        <Button
                            variant="ghost"
                            className="rounded-full"
                        >
                            <Emoji
                                symbol="😱"
                                label="scare"
                            />
                        </Button>
                        <CommentsDialog />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
