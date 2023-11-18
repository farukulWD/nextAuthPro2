"use client";

import React from "react";
import { Menu, Dropdown } from "antd";
import Link from "next/link";
import { clearUser } from "@/redux/slice/userSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(clearUser());
    localStorage.removeItem("token");
  };
  const profileMenu = (
    <Menu>
      <Menu.Item key="updateProfile">
        <Link href="/updateprofile">Update Profile</Link>
      </Menu.Item>
      <Menu.Item key="logout">
        <button onClick={handleLogout}>Log Out</button>
      </Menu.Item>
    </Menu>
  );

  return (
    <Menu theme="dark" activeKey="home" mode="horizontal">
      <Menu.Item key="home">
        <Link href="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="login">
        <Link href="/login">Login</Link>
      </Menu.Item>
      <Menu.Item key="register">
        <Link href="/register">Register</Link>
      </Menu.Item>
      <Menu.Item key="profile">
        <Dropdown overlay={profileMenu}>
          <Link href="/profile">Profile</Link>
        </Dropdown>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
