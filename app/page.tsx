import PostsGrid from "./_components/PostsGrid";

export default function Home() {
    return (
        <main className="max-w-5xl m-auto mt-10 px-5 lg:px-0">
            <div className="relative">
                <PostsGrid />
            </div>
        </main>
    );
}
