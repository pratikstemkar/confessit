import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const UserCard = () => {
    return (
        <>
            <Link
                href="/users/red-panda"
                passHref
            >
                <div className="flex space-x-2 items-center hover:cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-900 px-2 py-1 rounded-3xl">
                    <Avatar className="h-10 w-10">
                        <AvatarImage src="https://github.com/pratikstemkar.png" />
                        <AvatarFallback>PT</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <span className="font-semibold">red-panda</span>
                        <span className="text-sm text-muted-foreground">
                            This is my bio
                        </span>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default UserCard;
