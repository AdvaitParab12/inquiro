import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import axios from "axios";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordError, setPasswordError] = useState("");
  const [apiError, setApiError] = useState("");
  const [passwordValidation, setPasswordValidation] = useState({
    hasMinLength: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecialChar: false,
  });

  const navigate = useNavigate();

  const validatePassword = (password) => {
    return {
      hasMinLength: password.length >= 8,
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
  };

  const isPasswordValid = (validation) => {
    return Object.values(validation).every(Boolean);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "password") {
      setPasswordValidation(validatePassword(value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isPasswordValid(passwordValidation)) {
      setPasswordError("Password does not meet all requirements");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    } else {
      setPasswordError("");
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/signup",
        formData,
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      window.dispatchEvent(new Event("storageUpdated"));

      setApiError("");
      navigate("/");
    } catch (err) {
      setApiError(err.response?.data?.message || "Error signing up");
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
            Create your account
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

        <form className="flex w-full flex-col gap-2" onSubmit={handleSubmit}>
          <label htmlFor="name" className="text-lg font-medium text-gray-700">
            Full Name
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your Full name"
            className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
            required
          />

          <label htmlFor="email" className="text-lg font-medium text-gray-700">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
            required
          />

          <label
            htmlFor="password"
            className="text-lg font-medium text-gray-700"
          >
            Password
          </label>
          <Input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a strong password"
            className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
            required
          />

          {formData.password && (
            <div className="mt-2 space-y-1 text-sm">
              <p className="font-medium text-gray-700">Password requirements:</p>
              <div className="space-y-1">
                <div className={`flex items-center gap-2 ${passwordValidation.hasMinLength ? "text-green-600" : "text-red-500"}`}>
                  <span>{passwordValidation.hasMinLength ? "✓" : "✗"}</span>
                  <span>At least 8 characters</span>
                </div>
                <div className={`flex items-center gap-2 ${passwordValidation.hasUpperCase ? "text-green-600" : "text-red-500"}`}>
                  <span>{passwordValidation.hasUpperCase ? "✓" : "✗"}</span>
                  <span>One uppercase letter</span>
                </div>
                <div className={`flex items-center gap-2 ${passwordValidation.hasLowerCase ? "text-green-600" : "text-red-500"}`}>
                  <span>{passwordValidation.hasLowerCase ? "✓" : "✗"}</span>
                  <span>One lowercase letter</span>
                </div>
                <div className={`flex items-center gap-2 ${passwordValidation.hasNumber ? "text-green-600" : "text-red-500"}`}>
                  <span>{passwordValidation.hasNumber ? "✓" : "✗"}</span>
                  <span>One number</span>
                </div>
                <div className={`flex items-center gap-2 ${passwordValidation.hasSpecialChar ? "text-green-600" : "text-red-500"}`}>
                  <span>{passwordValidation.hasSpecialChar ? "✓" : "✗"}</span>
                  <span>One special character (!@#$%^&*)</span>
                </div>
              </div>
            </div>
          )}

          <label
            htmlFor="confirm_password"
            className="text-lg font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <Input
            id="confirm_password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            className={`border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 ${
              formData.confirmPassword &&
              formData.password !== formData.confirmPassword
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : formData.confirmPassword &&
                  formData.password === formData.confirmPassword
                ? "border-green-500 focus:border-green-500 focus:ring-green-500"
                : ""
            }`}
            required
          />

          {passwordError && (
            <p className="mt-1 text-sm text-red-500">{passwordError}</p>
          )}
          {apiError && <p className="mt-1 text-sm text-red-500">{apiError}</p>}

          <button
            type="submit"
            disabled={
              !isPasswordValid(passwordValidation) ||
              formData.password !== formData.confirmPassword
            }
            className="text-md mt-4 w-full cursor-pointer rounded-sm bg-emerald-600 px-3 py-1.5 font-semibold text-white disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            Create Account
          </button>
        </form>

        <div className="flex justify-center gap-1">
          <p className="text-gray-600">Already have an account?</p>
          <Link to={"/login"}>
            <p className="cursor-pointer text-emerald-500">Sign in</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default SignUp;


