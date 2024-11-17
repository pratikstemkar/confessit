import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./_components/NavBar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Footer from "./_components/Footer";

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
    title: "Spill It: We won't tell anyone!",
    description: "Spill the beans. We won't tell anyone!",
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
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="px-2 lg:px-0 sticky top-5 z-10">
                        <NavBar />
                    </div>
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
