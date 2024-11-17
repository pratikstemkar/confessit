import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { DialogContent } from "@radix-ui/react-dialog";
import { MessageCircleIcon } from "lucide-react";

const CommentsDialog = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    title="Comments"
                >
                    <MessageCircleIcon className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="w-11/12 lg:w-full rounded-3xl lg:rounded-3xl">
                <DialogHeader>
                    <DialogTitle>Comments</DialogTitle>
                </DialogHeader>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae unde accusamus sit quasi ipsa minus in sint, numquam
                    dolore? Maxime sit porro labore molestiae impedit earum,
                    quas consequatur incidunt reiciendis!
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default CommentsDialog;
