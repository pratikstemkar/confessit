"use client";

import Image from "next/image";
import Link from "next/link";
import { Chivo } from "next/font/google";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CreatePostDialog from "./CreatePostDialog";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";

const chivo = Chivo({
    subsets: ["latin"],
    display: "swap",
});

const NavBar = () => {
    const { data: session, status } = useSession({
        required: false,
    });

    return (
        <nav className=" max-w-7xl m-auto rounded-full border backdrop-blur-md">
            <div className="flex justify-between items-center px-2.5 py-2 lg:px-3.5 lg:py-3">
                <Link
                    href="/"
                    className="flex space-x-2 items-center group"
                    title="We Won’t Tell a Soul!"
                >
                    <Image
                        src="/logos/quiet.png"
                        height={100}
                        width={100}
                        alt="logo"
                        className="h-8 w-8 lg:h-12 lg:w-12 group-hover:animate-spin"
                    />
                    <span
                        className={`text-xl lg:text-3xl font-bold tracking-tighter ${chivo.className}`}
                    >
                        Spill It
                    </span>
                </Link>
                <div className="flex space-x-2 items-center">
                    {status === "unauthenticated" && (
                        <>
                            <Button
                                asChild
                                className="rounded-full"
                            >
                                <Link href="/create-profile">
                                    Create Profile
                                </Link>
                            </Button>
                        </>
                    )}
                    {status === "loading" && <>Loading...</>}
                    {status === "authenticated" && (
                        <>
                            <CreatePostDialog />
                            <Link
                                href="/users/red-panda"
                                title="Your Profile"
                            >
                                <Avatar className="h-9 w-9">
                                    <AvatarImage src={session?.user?.avatar} />
                                    <AvatarFallback>
                                        {session?.user?.username}
                                    </AvatarFallback>
                                </Avatar>
                            </Link>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full"
                                onClick={() => signOut()}
                                title="Logout"
                            >
                                <LogOutIcon className="h-4 w-4" />
                            </Button>
                        </>
                    )}
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
