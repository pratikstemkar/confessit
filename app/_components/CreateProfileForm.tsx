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
import {
    Check,
    ChevronsUpDownIcon,
    Loader2Icon,
    RotateCcw,
} from "lucide-react";
import Link from "next/link";
import { cn, generateUniqueUsername } from "@/lib/utils";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    // SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { cities } from "@/data/cities";
import { songs } from "@/data/songs";
import { movies } from "@/data/movies";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useState } from "react";

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
    location: z.string().min(3, {
        message: "City must be atleast 3 characters.",
    }),
    from: z.string().min(3, {
        message: "City must be atleast 3 characters.",
    }),
    music: z.string().min(3, {
        message: "Song must be atleast 3 characters.",
    }),
    movie: z.string().min(3, {
        message: "Movie must be atleast 3 characters.",
    }),
    gender: z.string().min(3, {
        message: "Gender must be atleast 3 characters.",
    }),
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
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

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
            gender: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setLoading(true);
        await axios
            .post(`${process.env.NEXT_PUBLIC_APP_URL}/api/users`, {
                username: values.username,
                bio: values.bio,
                location: values.location,
                from: values.from,
                music: values.music,
                movie: values.movie,
                password: values.password,
                gender: values.gender,
            })
            .then(async () => {
                await signIn("credentials", {
                    username: values.username,
                    password: values.password,
                    redirect: true,
                    callbackUrl: "/",
                });
                setError("");
            })
            .catch(e => setError(e.response.data.message));
        setLoading(false);
    };

    const handleUsernameBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        form.setValue("username", generateUniqueUsername());
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
                            <FormLabel>Anonymous Username</FormLabel>
                            <div className="flex space-x-2">
                                <FormControl>
                                    <Input
                                        className="text-sm"
                                        placeholder="Enter a anonymous username or generate it"
                                        {...field}
                                    />
                                </FormControl>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    title="Generate an anonymous username"
                                    onClick={handleUsernameBtn}
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
                                    className="text-sm"
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
                            <FormItem className="w-1/2">
                                <FormLabel>Current City</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant="outline"
                                                role="combobox"
                                                className={cn(
                                                    "w-full justify-between truncate font-normal",
                                                    !field.value &&
                                                        "text-muted-foreground"
                                                )}
                                            >
                                                {field.value
                                                    ? cities.find(
                                                          city =>
                                                              city.value ===
                                                              field.value
                                                      )?.label
                                                    : "Where do you live?"}
                                                <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-full p-0">
                                        <Command>
                                            <CommandInput placeholder="Search city..." />
                                            <CommandList>
                                                <CommandEmpty>
                                                    No city found.
                                                </CommandEmpty>
                                                <CommandGroup>
                                                    {cities.map(city => (
                                                        <CommandItem
                                                            value={city.label}
                                                            key={city.value}
                                                            onSelect={() => {
                                                                form.setValue(
                                                                    "location",
                                                                    city.value
                                                                );
                                                            }}
                                                        >
                                                            {city.label}
                                                            <Check
                                                                className={cn(
                                                                    "ml-auto",
                                                                    city.value ===
                                                                        field.value
                                                                        ? "opacity-100"
                                                                        : "opacity-0"
                                                                )}
                                                            />
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="from"
                        render={({ field }) => (
                            <FormItem className="w-1/2">
                                <FormLabel>Home</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant="outline"
                                                role="combobox"
                                                className={cn(
                                                    "w-full justify-between truncate font-normal",
                                                    !field.value &&
                                                        "text-muted-foreground"
                                                )}
                                            >
                                                {field.value
                                                    ? cities.find(
                                                          city =>
                                                              city.value ===
                                                              field.value
                                                      )?.label
                                                    : "Where are you from?"}
                                                <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-full p-0">
                                        <Command>
                                            <CommandInput placeholder="Search city..." />
                                            <CommandList>
                                                <CommandEmpty>
                                                    No city found.
                                                </CommandEmpty>
                                                <CommandGroup>
                                                    {cities.map(city => (
                                                        <CommandItem
                                                            value={city.label}
                                                            key={city.value}
                                                            onSelect={() => {
                                                                form.setValue(
                                                                    "from",
                                                                    city.value
                                                                );
                                                            }}
                                                        >
                                                            {city.label}
                                                            <Check
                                                                className={cn(
                                                                    "ml-auto",
                                                                    city.value ===
                                                                        field.value
                                                                        ? "opacity-100"
                                                                        : "opacity-0"
                                                                )}
                                                            />
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
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
                            <FormItem className="w-1/2">
                                <FormLabel>Song</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant="outline"
                                                role="combobox"
                                                className={cn(
                                                    "w-full justify-between truncate font-normal",
                                                    !field.value &&
                                                        "text-muted-foreground"
                                                )}
                                            >
                                                {field.value
                                                    ? songs.find(
                                                          song =>
                                                              song.value ===
                                                              field.value
                                                      )?.label
                                                    : "Your favourite song"}
                                                <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-full p-0">
                                        <Command>
                                            <CommandInput placeholder="Search song..." />
                                            <CommandList>
                                                <CommandEmpty>
                                                    No song found.
                                                </CommandEmpty>
                                                <CommandGroup>
                                                    {songs.map(song => (
                                                        <CommandItem
                                                            value={song.label}
                                                            key={song.value}
                                                            onSelect={() => {
                                                                form.setValue(
                                                                    "music",
                                                                    song.value
                                                                );
                                                            }}
                                                        >
                                                            {song.label}
                                                            <Check
                                                                className={cn(
                                                                    "ml-auto",
                                                                    song.value ===
                                                                        field.value
                                                                        ? "opacity-100"
                                                                        : "opacity-0"
                                                                )}
                                                            />
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="movie"
                        render={({ field }) => (
                            <FormItem className="w-1/2">
                                <FormLabel>Movie</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant="outline"
                                                role="combobox"
                                                className={cn(
                                                    "w-full justify-between truncate font-normal",
                                                    !field.value &&
                                                        "text-muted-foreground"
                                                )}
                                            >
                                                {field.value
                                                    ? movies.find(
                                                          movie =>
                                                              movie.value ===
                                                              field.value
                                                      )?.label
                                                    : "Your favourite movie"}
                                                <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-full p-0">
                                        <Command>
                                            <CommandInput placeholder="Search movie..." />
                                            <CommandList>
                                                <CommandEmpty>
                                                    No movie found.
                                                </CommandEmpty>
                                                <CommandGroup>
                                                    {movies.map(movie => (
                                                        <CommandItem
                                                            value={movie.label}
                                                            key={movie.value}
                                                            onSelect={() => {
                                                                form.setValue(
                                                                    "movie",
                                                                    movie.value
                                                                );
                                                            }}
                                                        >
                                                            {movie.label}
                                                            <Check
                                                                className={cn(
                                                                    "ml-auto",
                                                                    movie.value ===
                                                                        field.value
                                                                        ? "opacity-100"
                                                                        : "opacity-0"
                                                                )}
                                                            />
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Gender</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select a gender" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem
                                                value="man"
                                                onSelect={() =>
                                                    form.setValue(
                                                        "gender",
                                                        "man"
                                                    )
                                                }
                                            >
                                                Male
                                            </SelectItem>
                                            <SelectItem
                                                value="woman"
                                                onSelect={() =>
                                                    form.setValue(
                                                        "gender",
                                                        "woman"
                                                    )
                                                }
                                            >
                                                Female
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
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
                                    className="text-sm"
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
                {error !== "" && (
                    <div className="flex justify-center items-center p-2 border border-red-500 rounded-lg text-sm text-red-500 bg-opacity-50">
                        {error}
                    </div>
                )}
                <div className="flex flex-col space-y-2 w-full justify-center">
                    <Button
                        type="submit"
                        className="rounded-full"
                        disabled={loading}
                    >
                        {loading && (
                            <Loader2Icon className="h-4 w-4 animate-spin" />
                        )}
                        <span>Create Anonymous Profile</span>
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
