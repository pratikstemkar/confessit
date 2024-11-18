"use client";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BookmarkIcon, EllipsisIcon, Trash2Icon } from "lucide-react";

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
            <DropdownMenuContent className="rounded-3xl mr-2 lg:mr-0">
                <DropdownMenuItem className="hover:cursor-pointer rounded-t-3xl">
                    <BookmarkIcon className="h-4 w-4" />
                    <span>Bookmark</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-500 hover:cursor-pointer rounded-b-3xl">
                    <Trash2Icon className="h-4 w-4" />
                    <span>Delete</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default PostMenu;
