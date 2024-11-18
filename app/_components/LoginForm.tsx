"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Loader2Icon } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const formSchema = z.object({
    username: z.string().min(4, {
        message: "Username must be atleast 4 characters.",
    }),
    password: z.string().min(6, {
        message: "Password must be atleast 6 characters.",
    }),
});

export function LoginForm() {
    const [loading, setLoading] = useState(false);
    const error = useSearchParams().get("error");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setLoading(true);
        await signIn("credentials", {
            username: values.username,
            password: values.password,
            redirect: true,
            callbackUrl: "/",
        }).catch(() => {
            toast("Login Failed!", {
                description: "Sunday, December 03, 2023 at 9:00 AM",
                action: {
                    label: "Undo",
                    onClick: () => console.log("Undo"),
                },
            });
        });
        setLoading(false);
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
            >
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter your username"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter your password"
                                    type="password"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {error !== undefined && error !== null && (
                    <div className="flex justify-center items-center py-2 border border-red-500 rounded-lg text-sm text-red-500 bg-red-100 bg-opacity-50">
                        {error}
                    </div>
                )}
                <div className="flex flex-col space-y-1 items-center justify-center">
                    <Button
                        type="submit"
                        className="rounded-full"
                        disabled={loading}
                    >
                        {loading && (
                            <Loader2Icon className="h-4 w-4 animate-spin" />
                        )}
                        <span>Login</span>
                    </Button>
                    <div className="flex space-x-1 text-sm">
                        <span>Don&apos;t have an anonymous profile?</span>
                        <Link
                            href="/create-profile"
                            className="underline underline-offset-4"
                        >
                            Create
                        </Link>
                    </div>
                </div>
            </form>
        </Form>
    );
}
