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

const PostDialog = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <span className="text-primary hover:underline underline-offset-2">
                    Read More
                </span>
            </DialogTrigger>
            <DialogContent className="w-11/12 lg:w-full rounded-3xl lg:rounded-3xl">
                <DialogHeader className="hidden">
                    <DialogTitle>POst Dialog</DialogTitle>
                </DialogHeader>
                <div className="">
                    <div className="flex flex-col space-y-2">
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-1 items-center">
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
                                    voluptatibus voluptatum asperiores dolorum
                                    placeat eligendi nemo odio, distinctio
                                    minima labore similique facilis, tempora
                                    cumque, possimus voluptatem a veritatis quo
                                    esse.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex flex-wrap gap-2">
                                <Button
                                    variant="ghost"
                                    className="rounded-full hover:border border-primary"
                                >
                                    <span className="text-sm">14</span>
                                    <Emoji
                                        symbol="❤️"
                                        label="heart"
                                    />
                                </Button>
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
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default PostDialog;
