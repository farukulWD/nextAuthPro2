"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { api } from "@/services/api";
import variable from "@/styles/variables.module.scss";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { selectUser } from "@/redux/slice/userSlice";

const UpdateForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { updateUser } = api;

  const handleUpdate = async (values) => {
    console.log(values);
    try {
      const response = await updateUser(values);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
  };
  console.log(user?.data?.user);

  return (
    <div className={variable.FormStyle}>
      <div className={variable.titleSection}>
        <h2 className={variable.title}>Update Your Profile</h2>
        <p className={variable.subTitle}>Here You Can update your profile</p>
      </div>
      <Form
        name="update Form"
        className="updateForm"
        initialValues={{
          remember: true,
          name: user?.name,
        }}
        onFinish={handleUpdate}
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            defaultValue={user?.data?.user?.name}
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="contactNumber"
          rules={[
            {
              required: true,
              message: "Please input your contactNumber!",
            },
          ]}
        >
          <Input
            type="number"
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Your contact Number"
          />
        </Form.Item>
        <Form.Item
          name="gender"
          rules={[
            {
              required: true,
              message: "Please input your gender",
            },
          ]}
        >
          <Input
            type="text"
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="gender"
          />
        </Form.Item>
        <Form.Item
          name="birthDate"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            type="date"
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="birthDate"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="secondary"
            htmlType="submit"
            className="login-form-button"
          >
            update now!
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateForm;
