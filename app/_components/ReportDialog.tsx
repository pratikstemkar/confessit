import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { FlagIcon } from "lucide-react";
// import { CreatePostForm } from "./CreatePostForm";

const ReportDialog = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                >
                    <FlagIcon className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="w-11/12 lg:w-full rounded-3xl lg:rounded-3xl">
                <DialogHeader>
                    <DialogTitle>Report a Post</DialogTitle>
                </DialogHeader>
                <div>{/* <CreatePostForm /> */}</div>
            </DialogContent>
        </Dialog>
    );
};

export default ReportDialog;
