import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Comment = () => {
    return (
        <div className="flex flex-col space-y-2">
            <div className="flex flex-col space-y-1">
                <div className="flex space-x-2 items-center">
                    <Avatar className="h-8 w-8 ml-2">
                        <AvatarImage src="/avatars/man/4.png" />
                        <AvatarFallback>H</AvatarFallback>
                    </Avatar>
                    <span className="font-semibold text-base">bearded-fox</span>
                    <span className="text-xs text-muted-foreground">
                        at 12:24 PM
                    </span>
                </div>
                <div>
                    <div className="bg-slate-100 dark:bg-slate-900  rounded-3xl px-3 py-2">
                        That was something to think about.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comment;
