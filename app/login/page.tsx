import { Metadata } from "next";
import { Teko } from "next/font/google";
import { LoginForm } from "../_components/LoginForm";
import { Suspense } from "react";
import { Loader2Icon } from "lucide-react";

export const metadata: Metadata = {
    title: "Login - Spill It",
    description: "Spill the beans. We won't tell anyone!",
};

const teko = Teko({
    subsets: ["latin"],
    display: "swap",
});

const LoginPage = () => {
    return (
        <main className="max-w-5xl m-auto mt-10 px-5 lg:px-0">
            <h1 className={`${teko.className} text-4xl font-bold text-center`}>
                Login
            </h1>
            <div className="max-w-xs m-auto border rounded-3xl p-5 mt-5">
                <Suspense
                    fallback={
                        <div className="m-auto">
                            <Loader2Icon className="animate-spin" />
                        </div>
                    }
                >
                    <LoginForm />
                </Suspense>
            </div>
        </main>
    );
};

export default LoginPage;
