import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PostCard from "./PostCard";

const ProfileTabs = () => {
    return (
        <Tabs
            defaultValue="posts"
            className="w-full"
        >
            <TabsList className="w-full mb-5">
                <TabsTrigger
                    value="posts"
                    className="w-full"
                >
                    Your Posts
                </TabsTrigger>
                <TabsTrigger
                    value="bookmarks"
                    className="w-full"
                >
                    Bookmarks
                </TabsTrigger>
            </TabsList>
            <TabsContent value="posts">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </div>
            </TabsContent>
            <TabsContent value="bookmarks">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </div>
            </TabsContent>
        </Tabs>
    );
};

export default ProfileTabs;
