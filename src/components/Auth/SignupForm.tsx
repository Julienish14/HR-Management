import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Input from "../UI/Input";
import Button from "../UI/Button";

interface SignupFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup form submitted:", formData);
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
            <Input
              id="firstName"
              name="firstName"
              type="text"
              label="First Name"
              required
              value={formData.firstName}
              onChange={handleChange}
            />
            <Input
              id="lastName"
              name="lastName"
              type="text"
              label="Last Name"
              required
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <Input
            id="email"
            name="email"
            type="email"
            label="Email"
            required
            value={formData.email}
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

          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            label="Re-enter Password"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <div>
            <Button type="submit" variant="primary">
              Sign Up
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
              Sign Up with Google
            </Button>
          </div>
        </div>

        <div className="mt-6 text-center text-sm">
          <p className="text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-medium text-hrm-blue hover:text-blue-500"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
