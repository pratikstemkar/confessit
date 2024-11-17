import ProfileTabs from "@/app/_components/ProfileTabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Clapperboard, HouseIcon, MapPinIcon, MusicIcon } from "lucide-react";

const UserPage = ({ params }: { params: { username: string } }) => {
    return (
        <main className="max-w-5xl m-auto mt-10 px-5 lg:px-0">
            <div className="flex flex-col space-y-5">
                <div className="flex justify-between items-center">
                    <div className="flex space-x-5 items-center">
                        <Avatar className="h-28 w-28">
                            <AvatarImage src="/avatars/woman/8.png" />
                            <AvatarFallback>RP</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col space-y-2">
                            <div className="flex flex-col">
                                <span className="text-xl font-bold">
                                    {params.username}
                                </span>
                                <span className="text-sm text-muted-foreground line-clamp-2">
                                    We won&apos;t tell a soul!
                                </span>
                            </div>
                            <div className="flex gap-x-5 text-muted-foreground flex-wrap">
                                <div className="flex space-x-1 items-center">
                                    <MapPinIcon className="h-4 w-4" />
                                    <span>Pune</span>
                                </div>
                                <div className="flex space-x-1 items-center">
                                    <HouseIcon className="h-4 w-4" />
                                    <span>Pune</span>
                                </div>
                            </div>
                            <div className="flex gap-x-5 text-muted-foreground flex-wrap">
                                <div className="flex space-x-1 items-center">
                                    <MusicIcon className="h-4 w-4" />
                                    <span>Interstellar</span>
                                </div>
                                <div className="flex space-x-1 items-center">
                                    <Clapperboard className="h-4 w-4" />
                                    <span>Interstellar</span>
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
