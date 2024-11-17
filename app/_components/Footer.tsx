import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Emoji from "./Emoji";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="flex w-full justify-center items-center py-5 mt-5">
            <span className="font-mono text-muted-foreground">
                Developed with{" "}
                <Emoji
                    symbol="❤️"
                    label="heart"
                />{" "}
                by
            </span>
            <Link
                href="https://x.com/pratikstemkar"
                target="_blank"
            >
                <Avatar className="h-9 w-9 ml-2">
                    <AvatarImage src="https://github.com/pratikstemkar.png" />
                    <AvatarFallback>PT</AvatarFallback>
                </Avatar>
            </Link>
        </footer>
    );
};

export default Footer;
