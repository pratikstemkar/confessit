import { MedalIcon } from "lucide-react";
import UserCard from "./UserCard";
import { getUsers } from "@/lib/utils";

export interface User {
    _id: string;
    username: string;
    bio: string;
    password: string;
    location: string;
    from: string;
    music: string;
    movie: string;
    gender: string;
    avatar: string;
    bookmarks: string[];
    roles: string[];
    createdAt: string;
    updatedAt: string;
    __v: number;
}

const TopUsers = async () => {
    const foundUsers = await getUsers();

    return (
        <div className="border flex flex-col space-y-5 py-4 px-4 rounded-3xl">
            <h1 className="text-xl font-bold flex items-center">
                <MedalIcon className="h-6 w-6 mr-2" />
                Top Users
            </h1>
            <div className="flex flex-col space-y-2">
                {foundUsers?.users.map((user: User, index: number) => (
                    <UserCard
                        key={index}
                        username={user.username}
                        avatar={user.avatar}
                        bio={user.bio}
                    />
                ))}
            </div>
        </div>
    );
};

export default TopUsers;
