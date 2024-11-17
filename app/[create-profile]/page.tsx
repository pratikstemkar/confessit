import { Metadata } from "next";
import { Teko } from "next/font/google";
import { CreateProfileForm } from "../_components/CreateProfileForm";

const teko = Teko({
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Create Profile - Spill It",
    description: "Spill the beans. We won't tell anyone!",
};

const CreateProfile = () => {
    return (
        <main className="max-w-5xl m-auto mt-10 px-5 lg:px-0">
            <section>
                <div className="text-center">
                    <h1
                        className={`text-2xl lg:text-4xl font-extrabold ${teko.className}`}
                    >
                        <span className="text-4xl lg:text-6xl">
                            Curiosity calls!
                        </span>
                        <br />
                        Create an{" "}
                        <span
                            className="text-primary hover:underline hover:cursor-pointer underline-offset-4"
                            title="No one would know who you are. Not even us!"
                        >
                            Anonymous Profile
                        </span>{" "}
                        to see what everyone&apos;s confessing.
                    </h1>
                    <h2
                        className={`text-xl lg:text-2xl font-bold ${teko.className}`}
                    >
                        You&apos;ll thank us later – the secrets are worth it!
                    </h2>
                </div>
                <div className="max-w-lg m-auto border rounded-3xl p-5 mt-5">
                    <CreateProfileForm />
                </div>
            </section>
        </main>
    );
};

export default CreateProfile;
