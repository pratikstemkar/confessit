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
                <div className="flex space-x-2 items-center">
                    <FlagIcon className="h-4 w-4" />
                    <span>Report</span>
                </div>
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
