import Emoji from "@/app/_components/Emoji";
import PostMenu from "@/app/_components/PostMenu";
import ReportDialog from "@/app/_components/ReportDialog";
import ShareButton from "@/app/_components/ShareButton";
import TopUsers from "@/app/_components/TopUsers";
// import { options } from "@/app/api/auth/[...nextauth]/options";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formatDate, getPost, timeAgo } from "@/lib/utils";
// import { getServerSession } from "next-auth";
import Link from "next/link";
import { notFound } from "next/navigation";

const PostPage = async ({ params }: { params: { postId: string } }) => {
    // const session = await getServerSession(options);
    const foundPost = await getPost(params.postId);
    if (!foundPost.post) {
        notFound();
    }

    return (
        <main className="max-w-5xl m-auto mt-10 px-5 lg:px-0">
            <div className="flex space-x-5">
                <div className="lg:w-3/4">
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-col space-y-2">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center flex-wrap gap-2">
                                    <Link
                                        href={`/users/${foundPost?.post?.author.username}`}
                                        className="flex space-x-1 items-center"
                                        passHref
                                    >
                                        <Avatar className="h-10 w-10 mr-1">
                                            <AvatarImage
                                                src={
                                                    foundPost?.post?.author
                                                        .avatar
                                                }
                                            />
                                            <AvatarFallback>
                                                {
                                                    foundPost?.post?.author
                                                        .username
                                                }
                                            </AvatarFallback>
                                        </Avatar>
                                        <span className="text-lg font-semibold">
                                            {foundPost?.post?.author.username}
                                        </span>
                                    </Link>
                                    <span
                                        className="text-sm text-muted-foreground hover:text-current hover:cursor-pointer"
                                        title={formatDate(
                                            foundPost?.post.createdAt
                                        )}
                                    >
                                        {timeAgo(foundPost?.post.createdAt)}
                                    </span>
                                </div>
                                <div className="flex gap-x-2 items-center">
                                    <ReportDialog />
                                    <PostMenu
                                        authorId={foundPost?.post.author._id}
                                    />
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <h1 className="text-2xl font-bold">
                                    <span>{foundPost?.post?.title}</span>
                                </h1>
                            </div>
                            <div>
                                <p className="text-justify">
                                    {foundPost?.post?.content}
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <Button
                                    variant="ghost"
                                    className="rounded-full"
                                    title="Hot"
                                >
                                    <span>{foundPost?.post.reactions.hot}</span>
                                    <Emoji
                                        symbol="🔥"
                                        label="fire"
                                    />
                                </Button>
                                <Button
                                    variant="ghost"
                                    className="rounded-full"
                                    title="Funny"
                                >
                                    <span>
                                        {foundPost?.post.reactions.funny}
                                    </span>
                                    <Emoji
                                        symbol="😂"
                                        label="funny"
                                    />
                                </Button>
                                <Button
                                    variant="ghost"
                                    className="rounded-full"
                                    title="Shock"
                                >
                                    <span>
                                        {foundPost?.post.reactions.shock}
                                    </span>
                                    <Emoji
                                        symbol="😱"
                                        label="scare"
                                    />
                                </Button>
                                <ShareButton postId={foundPost?.post?._id} />
                            </div>
                        </div>
                        <div className="flex space-x-2">
                            <Input
                                placeholder="Enter your comment"
                                type="text"
                                className="rounded-full text-sm"
                            />
                            <Button className="rounded-full">
                                <span>Comment</span>
                            </Button>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className="hidden lg:block lg:w-1/4">
                    <TopUsers />
                </div>
            </div>
        </main>
    );
};

export default PostPage;
