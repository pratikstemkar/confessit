"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RotateCcw } from "lucide-react";
import Link from "next/link";

const formSchema = z.object({
    username: z
        .string()
        .min(4, {
            message: "Username must be atleast 4 characters.",
        })
        .max(30, {
            message: "Username can be atmost 30 characters.",
        }),
    bio: z
        .string()
        .min(4, {
            message: "Bio must be atleast 4 characters.",
        })
        .max(50, {
            message: "Bio must be atmax 50 characters.",
        }),
    location: z.string(),
    from: z.string(),
    music: z.string(),
    movie: z.string(),
    password: z
        .string()
        .min(6, {
            message: "Password must have atleast 6 characters.",
        })
        .max(16, {
            message: "Password must have at max 16 characters.",
        }),
});

export function CreateProfileForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            bio: "",
            location: "",
            from: "",
            music: "",
            movie: "",
            password: "",
        },
    });

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
            >
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Anonymous Username</FormLabel>
                            <div className="flex space-x-2">
                                <FormControl>
                                    <Input
                                        placeholder="Enter a anonymous username or generate it"
                                        {...field}
                                    />
                                </FormControl>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    title="Generate an anonymous username"
                                >
                                    <RotateCcw className="h-4 w-4" />
                                </Button>
                            </div>
                            <FormDescription>
                                Make sure that no one know other than you knows
                                this username.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Bio</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Tell us something about yourself"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex space-x-2 w-full">
                    <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Current City</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Where are you currently?"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="from"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Home</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Where are you from?"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex space-x-2 w-full">
                    <FormField
                        control={form.control}
                        name="music"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Music</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Your favourite song"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="movie"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Movie</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Your favourite movie"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter a password"
                                    type="password"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                There is no way to recover the account once you
                                forget the password.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex flex-col space-y-2 w-full justify-center">
                    <Button
                        type="submit"
                        className="rounded-full"
                    >
                        Create Anonymous Profile
                    </Button>
                    <div className="flex space-x-1 text-sm justify-center">
                        <span>Already have an account?</span>
                        <Link
                            href="/login"
                            className="underline underline-offset-4"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </form>
        </Form>
    );
}
