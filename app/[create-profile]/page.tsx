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
                <h1
                    className={`${teko.className} text-4xl font-bold text-center`}
                >
                    Create your Anonymous Profile
                </h1>
                <div className="max-w-lg m-auto border rounded-3xl p-5 mt-5">
                    <CreateProfileForm />
                </div>
            </section>
        </main>
    );
};

export default CreateProfile;
