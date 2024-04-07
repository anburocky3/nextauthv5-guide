import RegisterForm from "@/components/auth/register-form";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Register account",
  description: "Register for an account",
};

const RegisterPage = () => {
  return (
    <div>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
