import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Button } from "@/components/ui/button";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Confess It",
    description: "Confess everything!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <nav className="flex justify-between items-center px-5 py-2">
                    <div>
                        <span className="text-2xl font-bold tracking-tighter">
                            ConfessIt
                        </span>
                    </div>
                    <div>
                        <Button>About</Button>
                    </div>
                </nav>
                {children}
            </body>
        </html>
    );
}
