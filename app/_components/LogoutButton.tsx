"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LogOutIcon } from "lucide-react";
import { signOut, useSession } from "next-auth/react";

const LogoutButton = (props: { username: string }) => {
    const { data: session, status } = useSession({
        required: false,
    });
    return (
        <Button
            variant="ghost"
            size="icon"
            className={cn("rounded-full text-red-500", {
                hidden:
                    status === "unauthenticated" ||
                    status === "loading" ||
                    session?.user?.username !== props.username,
            })}
            onClick={() => signOut()}
            title="Logout"
        >
            <LogOutIcon className="h-4 w-4" />
        </Button>
    );
};

export default LogoutButton;
