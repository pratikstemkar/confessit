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
import { useState } from "react";

const CreatePostDialog = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeDialog = () => {
        setIsOpen(false);
    };

    return (
        <Dialog open={isOpen}>
            <DialogTrigger>
                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    title="Create Post"
                    onClick={() => setIsOpen(true)}
                >
                    <PlusIcon className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="w-11/12 lg:w-full rounded-3xl lg:rounded-3xl">
                <DialogHeader>
                    <DialogTitle>Create Post</DialogTitle>
                </DialogHeader>
                <div>
                    <CreatePostForm closeDialog={closeDialog} />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default CreatePostDialog;
