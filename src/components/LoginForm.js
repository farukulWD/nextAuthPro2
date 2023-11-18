"use client";

import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Link from "next/link";
import { api } from "@/services/api";
import variable from "@/styles/variables.module.scss";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "@/redux/slice/userSlice";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const { login, getUserInfo } = api;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogin = async (values) => {
    try {
      setLoading(true);
      const response = await login(values);
      if (response.data) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        dispatch(setToken(token));

        if (token) {
          const user = await getUserInfo();
          setLoading(false);
          if (user.data.user) {
            dispatch(setUser(user.data.user));
            Swal.fire({
              position: "center center",
              icon: "success",
              title: "Congratulation!!",
              text: "Now Login successful",
              showConfirmButton: false,
              timer: 1500,
            });
            router.push("/");
          }
        }
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
  };
  return (
    <div className={variable.FormStyle}>
      <div className={variable.titleSection}>
        <h2 className={variable.title}>Welcome Back</h2>
        <p className={variable.subTitle}>Please login</p>
      </div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={handleLogin}
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
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <p className={variable.redirectText}>
            Forgot your{" "}
            <span className="redirectLink">
              <Link href="/forgotpass">Password</Link>
            </span>
          </p>
        </Form.Item>
        <div>
          <Form.Item>
            <Button disabled={loading} htmlType="submit">
              {loading ? "Login..." : "Log In"}
            </Button>
          </Form.Item>
          <Form.Item>
            <p className={variable.redirectText}>
              Don.t Have an Account{" "}
              <span className="redirectLink">
                <Link href="/register">register now!</Link>
              </span>
            </p>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
