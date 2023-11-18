import VerifyUserForm from "@/components/VerifyUserForm";
import React from "react";
import variable from "@/styles/variables.module.scss";

const page = () => {
  return (
    <div className={variable.container}>
      <VerifyUserForm></VerifyUserForm>
    </div>
  );
};

export default page;
