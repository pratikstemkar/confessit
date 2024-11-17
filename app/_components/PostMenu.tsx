import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BookmarkIcon, EllipsisIcon, FlagIcon, Trash2Icon } from "lucide-react";

const PostMenu = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                >
                    <EllipsisIcon className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem className="hover:cursor-pointer">
                    <BookmarkIcon className="h-4 w-4" />
                    <span>Bookmark</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:cursor-pointer">
                    <FlagIcon className="h-4 w-4" />
                    <span>Report</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-500 hover:cursor-pointer">
                    <Trash2Icon className="h-4 w-4" />
                    <span>Delete</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default PostMenu;