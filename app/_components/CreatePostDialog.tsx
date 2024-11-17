import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { PlusIcon } from "lucide-react";
import { CreatePostForm } from "./CreatePostForm";

const CreatePostDialog = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    title="Create Post"
                >
                    <PlusIcon className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="w-11/12 lg:w-full rounded-3xl lg:rounded-3xl">
                <DialogHeader>
                    <DialogTitle>Create Post</DialogTitle>
                </DialogHeader>
                <div>
                    <CreatePostForm />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default CreatePostDialog;
