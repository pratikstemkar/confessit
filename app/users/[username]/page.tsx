"use client";

import LogoutButton from "@/app/_components/LogoutButton";
import ProfileTabs from "@/app/_components/ProfileTabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Clapperboard, HouseIcon, MapPinIcon, MusicIcon } from "lucide-react";
import { useSession } from "next-auth/react";

const UserPage = ({ params }: { params: { username: string } }) => {
    const { data: session } = useSession();

    return (
        <main className="max-w-5xl m-auto mt-10 px-5 lg:px-0">
            <div className="flex flex-col space-y-5">
                <div className="flex justify-between">
                    <div className="flex space-x-5 items-center">
                        <Avatar className="h-28 w-28">
                            <AvatarImage src={session?.user.avatar} />
                            <AvatarFallback>
                                {session?.user.username}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col space-y-2">
                            <div className="flex flex-col">
                                <span className="text-xl font-bold">
                                    {params.username}
                                </span>
                                <span className="text-sm text-muted-foreground line-clamp-2">
                                    {session?.user.bio}
                                </span>
                            </div>
                            <div className="flex gap-x-5 text-muted-foreground flex-wrap">
                                <div className="flex space-x-1 items-center">
                                    <MapPinIcon className="h-4 w-4" />
                                    <span>{session?.user.location}</span>
                                </div>
                                <div className="flex space-x-1 items-center">
                                    <HouseIcon className="h-4 w-4" />
                                    <span>{session?.user.from}</span>
                                </div>
                            </div>
                            <div className="flex gap-x-5 text-muted-foreground flex-wrap">
                                <div className="flex space-x-1 items-center">
                                    <MusicIcon className="h-4 w-4" />
                                    <span>{session?.user.music}</span>
                                </div>
                                <div className="flex space-x-1 items-center">
                                    <Clapperboard className="h-4 w-4" />
                                    <span>{session?.user.movie}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <LogoutButton username={params.username} />
                </div>
                <Separator />
                <section className="flex flex-col space-y-2">
                    <ProfileTabs />
                </section>
            </div>
        </main>
    );
};

export default UserPage;
