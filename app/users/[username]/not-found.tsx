import { Teko } from "next/font/google";

const teko = Teko({
    subsets: ["latin"],
    display: "swap",
});

const NotFoundPage = () => {
    return (
        <main className="max-w-5xl m-auto mt-20">
            <div>
                <h1
                    className={`${teko.className} font-bold text-4xl text-center text-red-500`}
                >
                    User Not Found!
                </h1>
            </div>
        </main>
    );
};

export default NotFoundPage;
