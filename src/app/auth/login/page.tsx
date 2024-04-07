import LoginForm from "@/components/auth/login-form";
import React from "react";

export const metadata = {
  title: "Login",
  description: "Login to your account",
};

const LoginPage = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
