import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";

function Login() {
  return (
    <div className="flex h-full flex-col items-center justify-start gap-4 pt-5">
      <section>
        <div className="flex items-center justify-center">
          <img src="/book-open.png" alt="logo" height={40} width={40} />
          <h1 className="text-4xl font-bold text-emerald-500">Inquiro</h1>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-700">
            Log in into your account
          </h2>
        </div>
      </section>
      <section className="flex flex-col gap-4 rounded-xl border border-gray-300 p-6 shadow-2xl">
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-semibold text-gray-700">Join Inquiro</p>
          <p className="text-gray-500">
            Create an account to publish and discover research papers
          </p>
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="name" className="text-lg font-medium text-gray-700">
            Full Name
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your Full name"
            className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
            required
            autoComplete="off"
          />
          <label htmlFor="email" className="text-lg font-medium text-gray-700">
            Email
          </label>
          <Input
            id="email"
            type="text"
            placeholder="Enter your email"
            className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
            required
            autoComplete="off"
          />
          <label
            htmlFor="password"
            className="text-lg font-medium text-gray-700"
          >
            Password
          </label>
          <Input
            id="password"
            type="text"
            placeholder="Create a strong password"
            className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
            required
          />

          <button className="text-md mt-4 w-full cursor-pointer rounded-sm bg-emerald-600 px-3 py-1.5 font-semibold text-white">
            Create Account
          </button>
        </div>
        <div className="flex justify-center gap-1">
          <p className="text-gray-600">Don't have an account?</p>
          <Link to={"/signup"}>
            <p className="cursor-pointer text-emerald-500">Sign up</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Login;
