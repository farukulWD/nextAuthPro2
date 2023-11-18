import ForgotPassForm from "@/components/ForgotPassForm";
import React from "react";
import variable from "@/styles/variables.module.scss";
const ForgotPassword = () => {
  return (
    <div className={variable.container}>
      <ForgotPassForm></ForgotPassForm>
    </div>
  );
};

export default ForgotPassword;
