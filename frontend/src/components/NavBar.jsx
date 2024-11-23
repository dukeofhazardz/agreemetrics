import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import api from "../lib/api"

const NavBar = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState(null);

  const handleSignIn = () => {
    const width = 600;
    const height = 600;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    const popup = window.open(
      "http://localhost:10000/login",
      "DocuSign Sign-In",
      `width=${width},height=${height},top=${top},left=${left}`
    );

    // Listen for the token from the popup via postMessage
    const receiveMessage = (event) => {
      console.log("Message received:", event);
      if (event.origin !== "http://localhost:10000") return;
      const { accessToken } = event.data;

      if (accessToken) {
        console.log("Access token received:", accessToken);
        localStorage.setItem("access_token", accessToken);
        navigate("/profile");
      }
    };

    window.addEventListener("message", receiveMessage, false);

    // Clean up the event listener when the popup closes
    const checkPopup = setInterval(() => {
      if (popup.closed) {
        clearInterval(checkPopup);
        window.removeEventListener("message", receiveMessage);
      }
    }, 1000);
  };

  const fetchUserInfo = async (token) => {
    try {
      const response = await api.get("/userinfo", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFirstName(response.data.given_name);
    } catch (error) {
      console.error("Failed to fetch user info:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      fetchUserInfo(token);
    }
  }, []);

  return (
    <nav className="navbar">
      <a className="logo" href="#">
        AgreeMetrics
      </a>
      {firstName ? (
        <h3 href="#">Welcome, {firstName}</h3>
      ) : (
        <a href="#" onClick={handleSignIn}>
          Sign in with DocuSign
        </a>
      )}
    </nav>
  );
};

export default NavBar;
