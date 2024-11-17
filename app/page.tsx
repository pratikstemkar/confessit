import PostCard from "./_components/PostCard";

export default function Home() {
    return (
        <main className="max-w-5xl m-auto mt-10 px-5 lg:px-0">
            <div className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </div>
            </div>
        </main>
    );
}
