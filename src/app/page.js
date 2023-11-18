"use client";

import LoginForm from "@/components/LoginForm";
import {
  selectToken,
  selectUser,
  setToken,
  setUser,
} from "@/redux/slice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import variable from "@/styles/variables.module.scss";
import LoginPage from "@/app/login/page";
import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { Flex, Spin } from "antd";

const Home = () => {
  const dispatch = useDispatch();
  const { getUserInfo } = api;
  const [getUser, setGetUser] = useState({});
  const user = useSelector(selectUser);
  const [loadingUser, setLoadingUser] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingUser(true);
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const user = await getUserInfo();
          setGetUser(user);
          dispatch(setUser(user));
          // dispatch(setToken())
        } catch (error) {
          console.error("Error fetching user info:", error);
        }
      }
      setLoadingUser(false);
    };

    fetchData();
  }, []);
  console.log(user);
  return (
    <main>
      {loadingUser ? (
        <div className={variable.loaderHome}>
          <Flex align="center" gap="middle">
            <Spin size="large" />
          </Flex>
        </div>
      ) : (
        <div className={` ${variable.bgImage} ${variable.homeStyle}`}>
          <div>
            {user ? (
              <div className={variable.homeContainer}>
                <h2 className={variable.homeTitle}>Welcome to Next Auth pro</h2>
              </div>
            ) : (
              <LoginPage></LoginPage>
            )}
          </div>
        </div>
      )}
    </main>
  );
};
export default Home;
