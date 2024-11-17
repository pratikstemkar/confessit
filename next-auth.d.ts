import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            username: string;
            bio: string;
            location: string;
            from: string;
            music: string;
            movie: string;
            avatar: string;
        } & DefaultSession["user"];
    }

    interface User extends DefaultUser {
        id: string;
        username: string;
        bio: string;
        from: string;
        location: string;
        music: string;
        movie: string;
        avatar: string;
    }
}
