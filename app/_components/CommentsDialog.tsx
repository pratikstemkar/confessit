import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { MessageCircleIcon, SendIcon } from "lucide-react";
import Comment from "./Comment";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";

const CommentsDialog = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <Button
                    variant="ghost"
                    className="rounded-full"
                    title="Comments"
                >
                    <MessageCircleIcon className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="w-11/12 lg:w-full rounded-3xl lg:rounded-3xl">
                <DialogHeader>
                    <DialogTitle className="text-wrap flex space-x-2 items-center">
                        <span>What happened that day?</span>
                    </DialogTitle>
                </DialogHeader>
                <div className="flex flex-col space-y-6">
                    <ScrollArea className="h-96">
                        <div className="flex flex-col space-y-6 mr-3">
                            <Comment />
                            <Comment />
                            <Comment />
                        </div>
                    </ScrollArea>
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
                            <span>Comment</span>
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default CommentsDialog;
