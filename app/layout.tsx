import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./_components/NavBar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Footer from "./_components/Footer";
import AuthProvider from "./_components/AuthProvider";
import { Toaster } from "sonner";

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
    title: "Spill It: We won't tell a soul!",
    description:
        "Share your secrets and know what others have to hide. Everything anonymously.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col justify-between h-screen`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <AuthProvider>
                        <div>
                            <div className="px-2 lg:px-0 sticky top-5 z-10">
                                <NavBar />
                            </div>
                            {children}
                        </div>

                        <div>
                            <Toaster />
                            <Footer />
                        </div>
                    </AuthProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
