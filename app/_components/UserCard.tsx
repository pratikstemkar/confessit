import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const UserCard = (props: { username: string; avatar: string; bio: string }) => {
    return (
        <>
            <Link
                href={`/users/${props.username}`}
                passHref
            >
                <div className="flex space-x-2 items-center hover:cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-900 px-2 py-1 rounded-3xl">
                    <Avatar className="h-10 w-10">
                        <AvatarImage src={props.avatar} />
                        <AvatarFallback>{props.username}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <span className="font-semibold truncate">
                            {props.username}
                        </span>
                        <span className="text-sm text-muted-foreground">
                            {props.bio}
                        </span>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default UserCard;
