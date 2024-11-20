"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Emoji from "./Emoji";
import React, { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { Loader2Icon } from "lucide-react";
import { toast } from "sonner";

const formSchema = z.object({
    title: z.string().min(3, {
        message: "Title must be atleast 3 characters.",
    }),
    post: z.string().min(4, {
        message: "Content must be atleast 4 characters.",
    }),
    mood: z.string().min(1, {
        message: "Mood is required.",
    }),
});

interface FormComponentProps {
    closeDialog: () => void;
}

export const CreatePostForm: React.FC<FormComponentProps> = ({
    closeDialog,
}) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { data: session } = useSession();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            post: "",
            mood: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setLoading(true);
        await axios
            .post(`${process.env.NEXT_PUBLIC_APP_URL}/api/posts`, {
                title: values.title,
                content: values.post,
                mood: values.mood,
                author: session?.user.id,
            })
            .then(() => {
                setError("");
                form.reset();
                toast("Post added!");
                closeDialog();
            })
            .catch(e => setError(e.response.data.message));
        setLoading(false);
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
            >
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input
                                    className="text-sm"
                                    placeholder="Enter a title"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="post"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Post</FormLabel>
                            <FormControl>
                                <Textarea
                                    className="text-sm"
                                    placeholder="Write your post here"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="mood"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Mood</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select a mood" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem
                                                value="happy"
                                                onSelect={() =>
                                                    form.setValue(
                                                        "mood",
                                                        field.value
                                                    )
                                                }
                                                className="hover:cursor-pointer"
                                            >
                                                <div className="flex space-x-2 items-center">
                                                    <Emoji
                                                        label="sad"
                                                        symbol="😊"
                                                    />
                                                    <span>Happy</span>
                                                </div>
                                            </SelectItem>
                                            <SelectItem
                                                value="sad"
                                                onSelect={() =>
                                                    form.setValue(
                                                        "mood",
                                                        field.value
                                                    )
                                                }
                                                className="hover:cursor-pointer"
                                            >
                                                <div className="flex space-x-2 items-center">
                                                    <Emoji
                                                        label="sad"
                                                        symbol="😢"
                                                    />
                                                    <span>Sad</span>
                                                </div>
                                            </SelectItem>
                                            <SelectItem
                                                value="angry"
                                                onSelect={() =>
                                                    form.setValue(
                                                        "mood",
                                                        field.value
                                                    )
                                                }
                                                className="hover:cursor-pointer"
                                            >
                                                <div className="flex space-x-2 items-center">
                                                    <Emoji
                                                        label="angry"
                                                        symbol="😠"
                                                    />
                                                    <span>Angry</span>
                                                </div>
                                            </SelectItem>
                                            <SelectItem
                                                value="excited"
                                                onSelect={() =>
                                                    form.setValue(
                                                        "mood",
                                                        field.value
                                                    )
                                                }
                                                className="hover:cursor-pointer"
                                            >
                                                <div className="flex space-x-2 items-center">
                                                    <Emoji
                                                        label="excited"
                                                        symbol="🤩"
                                                    />
                                                    <span>Excited</span>
                                                </div>
                                            </SelectItem>
                                            <SelectItem
                                                value="surprised"
                                                onSelect={() =>
                                                    form.setValue(
                                                        "mood",
                                                        field.value
                                                    )
                                                }
                                                className="hover:cursor-pointer"
                                            >
                                                <div className="flex space-x-2 items-center">
                                                    <Emoji
                                                        label="surprised"
                                                        symbol="😲"
                                                    />
                                                    <span>Surprised</span>
                                                </div>
                                            </SelectItem>
                                            <SelectItem
                                                value="love"
                                                onSelect={() =>
                                                    form.setValue(
                                                        "mood",
                                                        field.value
                                                    )
                                                }
                                                className="hover:cursor-pointer"
                                            >
                                                <div className="flex space-x-2 items-center">
                                                    <Emoji
                                                        label="love"
                                                        symbol="❤️"
                                                    />
                                                    <span>Love</span>
                                                </div>
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {error !== "" && (
                    <div className="flex justify-center items-center p-2 border border-red-500 rounded-lg text-sm text-red-500 bg-opacity-50">
                        {error}
                    </div>
                )}
                <div className="flex justify-between">
                    <Button
                        variant="outline"
                        className="rounded-full right-0"
                        onClick={e => {
                            e.preventDefault();
                            closeDialog();
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        className="rounded-full"
                        disabled={loading}
                    >
                        {loading && (
                            <Loader2Icon className="h-4 w-4 animate-spin" />
                        )}
                        <span>Create Post</span>
                    </Button>
                </div>
            </form>
        </Form>
    );
};
