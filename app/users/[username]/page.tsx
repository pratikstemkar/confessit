import LogoutButton from "@/app/_components/LogoutButton";
import ProfileTabs from "@/app/_components/ProfileTabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { getUser } from "@/lib/utils";
import { Clapperboard, HouseIcon, MapPinIcon, MusicIcon } from "lucide-react";
import { notFound } from "next/navigation";

const UserPage = async ({ params }: { params: { username: string } }) => {
    const foundUser = await getUser(params.username);
    if (!foundUser.user) {
        notFound();
    }

    return (
        <main className="max-w-5xl m-auto mt-10 px-5 lg:px-0">
            <div className="flex flex-col space-y-5">
                <div className="flex">
                    <div className="flex space-x-5 items-center w-full">
                        <Avatar className="h-28 w-28">
                            <AvatarImage src={foundUser?.user.avatar} />
                            <AvatarFallback>
                                {foundUser?.user.username}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex w-full flex-col space-y-2">
                            <div className="flex flex-col">
                                <div className="flex items-center justify-between">
                                    <span className="text-xl font-bold truncate flex-shrink-0">
                                        {params.username}
                                    </span>
                                    <LogoutButton username={params.username} />
                                </div>
                                <span className="text-sm text-muted-foreground line-clamp-2">
                                    {foundUser?.user.bio}
                                </span>
                            </div>
                            <div className="flex gap-x-5 text-muted-foreground flex-wrap">
                                <div className="flex space-x-1 items-center">
                                    <MapPinIcon className="h-4 w-4" />
                                    <span>{foundUser?.user.location}</span>
                                </div>
                                <div className="flex space-x-1 items-center">
                                    <HouseIcon className="h-4 w-4" />
                                    <span>{foundUser?.user.from}</span>
                                </div>
                            </div>
                            <div className="flex gap-x-5 text-muted-foreground flex-wrap">
                                <div className="flex space-x-1 items-center">
                                    <MusicIcon className="h-4 w-4" />
                                    <span className="">
                                        {foundUser?.user.music}
                                    </span>
                                </div>
                                <div className="flex space-x-1 items-center">
                                    <Clapperboard className="h-4 w-4" />
                                    <span>{foundUser?.user.movie}</span>
                                </div>
                            </div>
                        </div>
                    </div>
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
