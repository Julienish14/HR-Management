import React from "react";
import AuthLayout from "../components/Auth/AuthLayout";
import LoginForm from "../components/Auth/LoginForm";

const Login: React.FC = () => {
  return (
    <AuthLayout
      title="Login | Sign Up"
      version="20.2.23"
      copyright="2023-24 Next and Services"
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
