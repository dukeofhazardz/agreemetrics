import React, { useState, useEffect } from "react";
import api from "../lib/api";
import { setItemWithExpiry, getItemWithExpiry } from "../lib/cache";

const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState(() => {
    const cachedUserInfo = getItemWithExpiry("user_info");
    return cachedUserInfo ? JSON.parse(cachedUserInfo) : null;
  });

  const fetchUserInfo = async () => {
    try {
      const response = await api.get("/userinfo");
      setUserInfo(response.data);
      setItemWithExpiry("user_info", JSON.stringify(response.data), 3600000);
    } catch (error) {
      console.error("Failed to fetch user info:", error);
    }
  };

  useEffect(() => {
    if (!userInfo) {
      fetchUserInfo();
    }
  }, []);

  return userInfo;
};

export default useUserInfo;
