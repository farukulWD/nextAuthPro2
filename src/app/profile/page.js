"use client";
import { selectUser } from "@/redux/slice/userSlice";
import { Card } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import variable from "@/styles/variables.module.scss";

const ProfilePage = () => {
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <div className={variable.container}>
      <Card
        title="User Information"
        bordered={false}
        style={{
          width: 300,
        }}
      >
        <div>
          <div>
            <h3>name: {user?.data?.user?.name}</h3>
            <p>Email: {user?.data?.user?.email}</p>
            <p>Phone: {user?.data?.user?.contactNumber}</p>
          </div>
          <div>
            <p>Date of Birth: {user?.data?.user?.birthDate}</p>
            <p>Gender: {user?.data?.user?.gender}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfilePage;
