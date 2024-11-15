import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { MessageCircle } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const CommentDialog = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <Button
                    variant="ghost"
                    size="icon"
                >
                    <MessageCircle className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <div className="flex flex-col gap-5">
                    <div>
                        <span className="text-xl font-bold tracking-tighter">
                            Comments
                        </span>
                    </div>
                    <ScrollArea className="h-96">
                        {" "}
                        <div className="flex flex-col gap-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle>
                                        <div className="flex gap-2">
                                            <span className="text-base">
                                                John Doe
                                            </span>
                                        </div>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="-mt-5">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Eum architecto
                                    perspiciatis distinctio.
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>
                                        <div className="flex gap-2">
                                            <span className="text-base">
                                                John Doe
                                            </span>
                                        </div>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="-mt-5">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Eum architecto
                                    perspiciatis distinctio.
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>
                                        <div className="flex gap-2">
                                            <span className="text-base">
                                                John Doe
                                            </span>
                                        </div>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="-mt-5">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Eum architecto
                                    perspiciatis distinctio.
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>
                                        <div className="flex gap-2">
                                            <span className="text-base">
                                                John Doe
                                            </span>
                                        </div>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="-mt-5">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Eum architecto
                                    perspiciatis distinctio.
                                </CardContent>
                            </Card>
                        </div>
                    </ScrollArea>
                    <div className="flex space-x-2">
                        <Input
                            placeholder="Enter your comment"
                            className="rounded-full"
                        />
                        <Button
                            variant="default"
                            className="rounded-full"
                        >
                            Comment
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default CommentDialog;
