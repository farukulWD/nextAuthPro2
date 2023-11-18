import LoginForm from "@/components/LoginForm";
import React from "react";
import variable from "@/styles/variables.module.scss";
const LoginPage = () => {
  return (
    <div className={variable.container}>
      <LoginForm></LoginForm>
    </div>
  );
};

export default LoginPage;
