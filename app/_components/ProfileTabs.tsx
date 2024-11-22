import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProfileTabs = () => {
    return (
        <Tabs
            defaultValue="posts"
            className="w-full"
        >
            <TabsList className="w-full mb-5 rounded-3xl">
                <TabsTrigger
                    value="posts"
                    className="w-full rounded-l-3xl"
                >
                    Your Posts
                </TabsTrigger>
                <TabsTrigger
                    value="bookmarks"
                    className="w-full rounded-r-3xl"
                >
                    Bookmarks
                </TabsTrigger>
            </TabsList>
            <TabsContent value="posts">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <>No posts</>
                </div>
            </TabsContent>
            <TabsContent value="bookmarks">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <>No posts</>
                </div>
            </TabsContent>
        </Tabs>
    );
};

export default ProfileTabs;
