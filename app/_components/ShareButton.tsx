"use client";

import { Button } from "@/components/ui/button";
import { Share2Icon } from "lucide-react";
import { toast } from "sonner";

const ShareButton = (props: { postId: string }) => {
    return (
        <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            title="Share"
            onClick={() => {
                navigator.clipboard.writeText(
                    `${process.env.NEXT_PUBLIC_APP_URL}/posts/${props.postId}`
                );
                toast("Link copied!");
            }}
        >
            <Share2Icon className="h-4 w-4" />
        </Button>
    );
};

export default ShareButton;
