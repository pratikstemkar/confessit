import { Skeleton } from "@/components/ui/skeleton";

const PostSkeleton = () => {
    return (
        <div className="flex flex-col space-y-2 border rounded-3xl w-full p-4">
            <div className="flex space-x-2 items-center">
                <Skeleton className="rounded-full h-9 w-9" />
                <Skeleton className="rounded-full h-4 w-48" />
            </div>
            <div className="flex flex-col space-y-1">
                <Skeleton className="rounded-full h-4 w-3/4" />
                <Skeleton className="rounded-xl h-32 w-full" />
            </div>
            <Skeleton className="rounded-xl h-9 w-1/2" />
        </div>
    );
};

export default PostSkeleton;
