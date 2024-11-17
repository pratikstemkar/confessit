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
import { usePathname } from "next/navigation";

const formSchema = z.object({
    username: z.string().min(4, {
        message: "Username must be atleast 4 characters.",
    }),
    password: z.string().min(6, {
        message: "Password must be atleast 6 characters.",
    }),
});

export function LoginForm() {
    const pathname = usePathname();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: pathname,
            password: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
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
                <div className="flex justify-center">
                    <Button
                        type="submit"
                        className="rounded-full"
                    >
                        Login
                    </Button>
                </div>
            </form>
        </Form>
    );
}
