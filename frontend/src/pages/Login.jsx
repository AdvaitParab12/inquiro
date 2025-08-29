import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (formData.password.length < 1) {
      setError("Password is required");
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        formData,
      );
      const token = res.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      window.dispatchEvent(new Event("storageUpdated"));
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

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
          <p className="text-2xl font-semibold text-gray-700">Welcome Back</p>
          <p className="text-gray-500">Access your account and continue exploring</p>
        </div>

        <form className="flex w-full flex-col gap-2" onSubmit={handleSubmit}>
          <label htmlFor="email" className="text-lg font-medium text-gray-700">
            Email
          </label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={`border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 ${
              formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : ""
            }`}
            required
            autoComplete="email"
          />

          <label htmlFor="password" className="text-lg font-medium text-gray-700">
            Password
          </label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="border-gray-200 pr-10 focus:border-emerald-500 focus:ring-emerald-500"
              required
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {formData.password && (
            <div className="mt-1">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Password strength:</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className={`h-1 w-4 rounded-full ${
                        formData.password.length >= level * 2
                          ? level <= 2
                            ? "bg-red-500"
                            : level === 3
                              ? "bg-yellow-500"
                              : "bg-green-500"
                          : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs">
                  {formData.password.length < 4
                    ? "Weak"
                    : formData.password.length < 8
                      ? "Fair"
                      : "Strong"}
                </span>
              </div>
            </div>
          )}

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            disabled={!formData.email || !formData.password}
            className="text-md mt-4 w-full cursor-pointer rounded-sm bg-emerald-600 px-3 py-1.5 font-semibold text-white disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            Log In
          </button>
        </form>

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


