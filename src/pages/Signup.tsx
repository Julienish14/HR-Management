import React from "react";
import AuthLayout from "../components/Auth/AuthLayout";
import SignupForm from "../components/Auth/SignupForm";

const Signup: React.FC = () => {
  return (
    <AuthLayout
      title="Login | Sign Up"
      version="20.2.0.1"
      copyright="2023-24 HRM and services"
    >
      <SignupForm />
    </AuthLayout>
  );
};

export default Signup;
