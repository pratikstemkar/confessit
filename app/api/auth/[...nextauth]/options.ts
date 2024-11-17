import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { clientPromise, dbConnect } from "@/lib/mongodb";
import User from "@/lib/models/user.model";
import { compare } from "bcrypt";
import { Adapter } from "next-auth/adapters";

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "Enter Username",
                },
                password: {
                    label: "Password",
                    type: "password",
                },
            },
            async authorize(credentials) {
                await dbConnect();

                const user = await User.findOne({
                    username: credentials?.username,
                });
                if (!user) {
                    throw new Error("Username not found!");
                }

                const isPasswordCorrect = await compare(
                    credentials!.password,
                    user?.password
                );

                console.log(user);
                if (!isPasswordCorrect) {
                    throw new Error("Password is incorrect!");
                }

                return user;
            },
        }),
    ],
    callbacks: {
        async session({ session, token, user }) {
            console.log("session callback", { session, token, user });
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    username: token.username,
                    bio: token.bio,
                    location: token.location,
                    from: token.from,
                    music: token.music,
                    movie: token.movie,
                    avatar: token.avatar,
                },
            };
        },
        async jwt({ token, user, session, trigger }) {
            console.log("jwt callback", { token, user, session });
            if (trigger == "update" && session?.username) {
                token.username = session?.username;
                token.bio = session?.bio;
                token.location = session?.location;
                token.from = session?.from;
                token.music = session?.music;
                token.movie = session?.movie;
                token.avatar = session?.avatar;
            }
            if (user) {
                return {
                    ...token,
                    id: user.id,
                    username: user.username,
                    bio: user.bio,
                    avatar: user.avatar,
                    location: user.location,
                    from: user.from,
                    music: user.music,
                    movie: user.movie,
                };
            }
            await dbConnect();
            const newUser = await User.updateOne(
                { _id: token.id },
                { username: token.username }
            );
            console.log("newUser", newUser);
            return token;
        },
    },
    pages: {
        signIn: "/login",
        error: "/login",
    },
    adapter: MongoDBAdapter(clientPromise) as Adapter,
    session: { strategy: "jwt" },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET,
    },
    secret: process.env.NEXTAUTH_SECRET,
};
