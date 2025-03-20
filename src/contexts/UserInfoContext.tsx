
import React, { createContext, useContext, useEffect, useState } from "react";
import { UserInfo } from "@/components/UserInfoForm";

type UserInfoContextType = {
  userInfo: UserInfo;
  updateUserInfo: (data: UserInfo) => void;
};

const defaultUserInfo: UserInfo = {
  name: "John Doe",
  title: "Software Developer",
  bio: "I'm a software developer specializing in building exceptional digital experiences that combine beautiful design with seamless functionality.",
  experience: "I have over a year of professional experience, passionate about creating elegant, user-centered applications. My journey in technology began with a curiosity about how digital products shape our daily experiences.",
  skills: ["React", "JavaScript", "Node", "Jira", "Cypress", "Flask"],
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  email: "hello@example.com",
};

const UserInfoContext = createContext<UserInfoContextType | undefined>(undefined);

export const UserInfoProvider = ({ children }: { children: React.ReactNode }) => {
  const [userInfo, setUserInfo] = useState<UserInfo>(() => {
    const savedUserInfo = localStorage.getItem("userInfo");
    return savedUserInfo ? JSON.parse(savedUserInfo) : defaultUserInfo;
  });

  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }, [userInfo]);

  const updateUserInfo = (data: UserInfo) => {
    setUserInfo(data);
  };

  return (
    <UserInfoContext.Provider value={{ userInfo, updateUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => {
  const context = useContext(UserInfoContext);
  if (context === undefined) {
    throw new Error("useUserInfo must be used within a UserInfoProvider");
  }
  return context;
};
