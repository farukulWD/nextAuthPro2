import RegistrationForm from "@/components/RegisterForm";
import React from "react";
import variable from "@/styles/variables.module.scss";

const RegisterPage = () => {
  return (
    <div className={variable.container}>
      <RegistrationForm></RegistrationForm>
    </div>
  );
};

export default RegisterPage;
