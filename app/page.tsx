import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { EllipsisIcon, Heart } from "lucide-react";
import CommentDialog from "./_components/CommentDialog";
import { Input } from "@/components/ui/input";

export default function Home() {
    return (
        <main className="max-w-7xl m-auto mt-5">
            <div className="flex gap-5">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-1/2 flex flex-col gap-2">
                            <div className="flex flex-col">
                                <span className="text-xl font-bold">
                                    Who are you?
                                </span>
                                <span className="text-muted-foreground text-sm">
                                    Enter your anonymous name to see other
                                    confessions
                                </span>
                            </div>
                            <div>
                                <Input placeholder="Enter your name" />
                            </div>
                            <Button>START</Button>
                        </div>
                    </div>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <div className="flex justify-between items-center gap-2">
                                    <div className="flex items-center gap-2">
                                        <Avatar>
                                            <AvatarImage src="https://github.com/pratikstemkar.png" />
                                            <AvatarFallback>PT</AvatarFallback>{" "}
                                        </Avatar>
                                        <span className="text-xl">
                                            John Doe
                                        </span>
                                    </div>
                                    <div>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                        >
                                            <EllipsisIcon className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Nisi voluptas tenetur, dolorum
                                quis ducimus vero dolor. Quam quidem voluptatum
                                laboriosam hic, facilis temporibus blanditiis
                                perspiciatis eos, quia, eius porro asperiores.
                            </CardDescription>
                            <div className="flex items-center gap-2 mt-5">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                >
                                    <Heart className="h-4 w-4" />
                                </Button>
                                <CommentDialog />
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <div className="flex justify-between items-center gap-2">
                                    <div className="flex items-center gap-2">
                                        <Avatar>
                                            <AvatarImage src="https://github.com/pratikstemkar.png" />
                                            <AvatarFallback>PT</AvatarFallback>{" "}
                                        </Avatar>
                                        <span className="text-xl">
                                            John Doe
                                        </span>
                                    </div>
                                    <div>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                        >
                                            <EllipsisIcon className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Nisi voluptas tenetur, dolorum
                                quis ducimus vero dolor. Quam quidem voluptatum
                                laboriosam hic, facilis temporibus blanditiis
                                perspiciatis eos, quia, eius porro asperiores.
                            </CardDescription>
                            <div className="flex items-center gap-2 mt-5">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                >
                                    <Heart className="h-4 w-4" />
                                </Button>
                                <CommentDialog />
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <div className="flex justify-between items-center gap-2">
                                    <div className="flex items-center gap-2">
                                        <Avatar>
                                            <AvatarImage src="https://github.com/pratikstemkar.png" />
                                            <AvatarFallback>PT</AvatarFallback>{" "}
                                        </Avatar>
                                        <span className="text-xl">
                                            John Doe
                                        </span>
                                    </div>
                                    <div>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                        >
                                            <EllipsisIcon className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Nisi voluptas tenetur, dolorum
                                quis ducimus vero dolor. Quam quidem voluptatum
                                laboriosam hic, facilis temporibus blanditiis
                                perspiciatis eos, quia, eius porro asperiores.
                            </CardDescription>
                            <div className="flex items-center gap-2 mt-5">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                >
                                    <Heart className="h-4 w-4" />
                                </Button>
                                <CommentDialog />
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <div className="flex justify-between items-center gap-2">
                                    <div className="flex items-center gap-2">
                                        <Avatar>
                                            <AvatarImage src="https://github.com/pratikstemkar.png" />
                                            <AvatarFallback>PT</AvatarFallback>{" "}
                                        </Avatar>
                                        <span className="text-xl">
                                            John Doe
                                        </span>
                                    </div>
                                    <div>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                        >
                                            <EllipsisIcon className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Nisi voluptas tenetur, dolorum
                                quis ducimus vero dolor. Quam quidem voluptatum
                                laboriosam hic, facilis temporibus blanditiis
                                perspiciatis eos, quia, eius porro asperiores.
                            </CardDescription>
                            <div className="flex items-center gap-2 mt-5">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                >
                                    <Heart className="h-4 w-4" />
                                </Button>
                                <CommentDialog />
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <div className="flex justify-between items-center gap-2">
                                    <div className="flex items-center gap-2">
                                        <Avatar>
                                            <AvatarImage src="https://github.com/pratikstemkar.png" />
                                            <AvatarFallback>PT</AvatarFallback>{" "}
                                        </Avatar>
                                        <span className="text-xl">
                                            John Doe
                                        </span>
                                    </div>
                                    <div>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                        >
                                            <EllipsisIcon className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Nisi voluptas tenetur, dolorum
                                quis ducimus vero dolor. Quam quidem voluptatum
                                laboriosam hic, facilis temporibus blanditiis
                                perspiciatis eos, quia, eius porro asperiores.
                            </CardDescription>
                            <div className="flex items-center gap-2 mt-5">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                >
                                    <Heart className="h-4 w-4" />
                                </Button>
                                <CommentDialog />
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="flex flex-col gap-5 w-1/4">Haha</div>
            </div>
        </main>
    );
}
