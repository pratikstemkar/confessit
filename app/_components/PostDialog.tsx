import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Emoji from "./Emoji";
import { ScrollArea } from "@/components/ui/scroll-area";
import Comment from "./Comment";
import { Input } from "@/components/ui/input";
import { SendIcon } from "lucide-react";

const PostDialog = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <span
                    className="text-primary hover:underline underline-offset-2"
                    title="Read complete post"
                >
                    Read More
                </span>
            </DialogTrigger>
            <DialogContent className="w-11/12 lg:w-full rounded-3xl lg:rounded-3xl">
                <DialogHeader className="hidden">
                    <DialogTitle>POst Dialog</DialogTitle>
                </DialogHeader>
                <div className="">
                    <ScrollArea className="h-96">
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
                            </div>
                            <div>
                                <span className="font-bold tracking-tighter text-lg lg:text-xl">
                                    What happened that day?
                                </span>
                                <div>
                                    <p className="text-justify">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Necessitatibus
                                        voluptatibus voluptatum asperiores
                                        dolorum placeat eligendi nemo odio,
                                        distinctio minima labore similique
                                        facilis, tempora cumque, possimus
                                        voluptatem a veritatis quo esse.
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex flex-wrap gap-2">
                                    {/* <Button
                                        variant="ghost"
                                        className="rounded-full hover:border border-primary"
                                    >
                                        <span className="text-sm">14</span>
                                        <Emoji
                                            symbol="❤️"
                                            label="heart"
                                        />
                                    </Button> */}
                                    <Button
                                        variant="ghost"
                                        className="rounded-full"
                                    >
                                        <span className="text-sm">14</span>
                                        <Emoji
                                            symbol="🔥"
                                            label="fire"
                                        />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        className="rounded-full"
                                    >
                                        <span className="text-sm">14</span>
                                        <Emoji
                                            symbol="😂"
                                            label="funny"
                                        />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        className="rounded-full"
                                    >
                                        <span className="text-sm">14</span>
                                        <Emoji
                                            symbol="😱"
                                            label="scare"
                                        />
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6 mt-5">
                            <div className="flex flex-col space-y-6 mr-3">
                                <Comment />
                                <Comment />
                                <Comment />
                                <Comment />
                                <Comment />
                                <Comment />
                                <Comment />
                                <Comment />
                            </div>
                            <div className="flex space-x-2 items-center">
                                <Input
                                    placeholder="Enter your comment here"
                                    className="rounded-full"
                                />
                                <Button
                                    className="rounded-full"
                                    title="Post Comment"
                                >
                                    <SendIcon className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </ScrollArea>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default PostDialog;
