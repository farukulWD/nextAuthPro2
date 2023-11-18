"use client";

import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import variable from "@/styles/variables.module.scss";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { api } from "@/services/api";

const ForgotPassForm = () => {
  const { forgotPassword } = api;
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleForgot = async (values) => {
    try {
      setLoading(true);
      const response = await forgotPassword(values);
      if (response.data) {
        Swal.fire({
          icon: "success",
          title: "Please check your email",
          text: error.message,
        });
        router.push("/login");
      }
    } catch (error) {
      if (error.message) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      }
    }
    setLoading(false);
  };
  return (
    <div className={variable.FormStyle}>
      <div className={variable.titleSection}>
        <h2 className={variable.title}>Are You Forgot password ?</h2>
        <p className={variable.subTitle}>Get Account with email</p>
      </div>
      <Form
        name="forgot password"
        className="forgot-form"
        initialValues={{
          remember: true,
        }}
        onFinish={handleForgot}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email",
            },
          ]}
        >
          <Input
            type="email"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="email"
          />
        </Form.Item>

        <div>
          <Form.Item>
            <Button disabled={loading} htmlType="submit">
              {loading ? "working..." : "Forgot"}
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default ForgotPassForm;
