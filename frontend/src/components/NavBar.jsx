import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getItemWithExpiry, setItemWithExpiry } from "../lib/cache";
import "./NavBar.css";
import Logo from "../assets/logo.png";

const NavBar = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const cacheUserInfo = getItemWithExpiry("user_info");
    if (cacheUserInfo) {
      setUserInfo(cacheUserInfo);
    }
  }, []);

  const handleLogin = () => {
    const authUrl = "http://localhost:10000/login";
    const width = 600;
    const height = 700;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    const popup = window.open(
      authUrl,
      "DocuSign Login",
      `width=${width},height=${height},top=${top},left=${left}`
    );

    // Listen for message from the pop-up window
    window.addEventListener("message", (event) => {
      if (event.origin !== "http://localhost:10000") return;

      const { accessToken } = event.data;
      if (accessToken) {
        localStorage.clear();
        setItemWithExpiry("access_token", accessToken, 3600000);
        fetchUserInfo(accessToken);
      }
    });
  };

  const fetchUserInfo = async (token) => {
    const response = await fetch("http://localhost:10000/userinfo", {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.ok) {
      const userInfo = await response.json();
      setItemWithExpiry("user_info", userInfo, 3600000);
      setUserInfo(userInfo);
      console.log("User Info:", userInfo);
      // Redirect to the profile page
      window.location.href = "/profile";
    } else {
      console.error("Failed to fetch user info");
    }
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={Logo} alt="Agreemetrics logo" />
      </Link>
      {userInfo.given_name ? (
        <Link to="/profile">
          <h3>{userInfo.given_name}</h3>
        </Link>
      ) : (
        <a href="#" onClick={handleLogin} className="tooltip">
          Login
          <span className="tooltiptext">Sign in with DocuSign</span>
        </a>
      )}
    </nav>
  );
};

export default NavBar;
