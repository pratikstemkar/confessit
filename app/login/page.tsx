import { LoginForm } from "../_components/LoginForm";

const LoginPage = () => {
    return (
        <main className="max-w-5xl m-auto mt-10 px-5 lg:px-0">
            <h1 className="text-center text-2xl lg:text-4xl font-extrabold tracking-tighter">
                Login to your account
            </h1>
            <div className="max-w-lg m-auto border rounded-3xl p-5 mt-5">
                <LoginForm />
            </div>
        </main>
    );
};

export default LoginPage;
