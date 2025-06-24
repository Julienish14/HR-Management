import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Input from "../UI/Input";
import Button from "../UI/Button";

interface LoginFormData {
  username: string;
  password: string;
  remember: boolean;
}

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    username: "",
    password: "",
    remember: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login form submitted:", formData);
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <Input
            id="username"
            name="username"
            type="text"
            label="Username"
            required
            value={formData.username}
            onChange={handleChange}
          />

          <Input
            id="password"
            name="password"
            type="password"
            label="Password"
            required
            value={formData.password}
            onChange={handleChange}
          />

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember"
                type="checkbox"
                className="h-4 w-4 text-hrm-blue focus:ring-blue-500 border-gray-300 rounded"
                checked={formData.remember}
                onChange={handleChange}
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-hrm-blue hover:text-blue-500"
              >
                Forgot Password?
              </a>
            </div>
          </div>

          <div>
            <Button type="submit" variant="primary">
              Login
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6">
            <Button variant="google">
              <FcGoogle className="h-5 w-5 mr-2" />
              Login with Google
            </Button>
          </div>
        </div>

        <div className="mt-6 text-center text-sm">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="font-medium text-hrm-blue hover:text-blue-500"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
