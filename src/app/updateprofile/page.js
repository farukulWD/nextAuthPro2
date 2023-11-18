import React from "react";

import variable from "@/styles/variables.module.scss";
import UpdateForm from "@/components/updateForm";

const UpdateProfilePage = () => {
  return (
    <div className={variable.container}>
      <UpdateForm></UpdateForm>
    </div>
  );
};

export default UpdateProfilePage;
