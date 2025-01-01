import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { setItemWithExpiry } from "../lib/cache";
import useUserInfo from "../hooks/UserInfo";
import "./NavBar.css";
import Logo from "../assets/logo.png";

const NavBar = () => {
  const navigate = useNavigate();
  const userInfo = useUserInfo();

  useEffect(() => {
    const receiveMessage = (event) => {
      if (event.origin !== "http://localhost:10000") return;
      const { accessToken } = event.data;

      if (accessToken) {
        localStorage.clear();
        setItemWithExpiry("access_token", accessToken, 3600000);

        if (userInfo) {
          navigate("/profile");
        }
      }
    };

    window.addEventListener("message", receiveMessage, false);

    return () => {
      window.removeEventListener("message", receiveMessage, false);
    };
  }, [navigate, userInfo]);

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

    // Clean up the event listener when the popup closes
    const checkPopup = setInterval(() => {
      if (popup.closed) {
        clearInterval(checkPopup);
        window.removeEventListener("message", receiveMessage);
      }
    }, 1000);
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={Logo} alt="Agreemetrics logo" />
      </Link>
      {userInfo ? (
        <Link to="/profile">
          <h3>Welcome, {userInfo.given_name}</h3>
        </Link>
      ) : (
        <a href="#" onClick={handleSignIn}>
          Sign in with DocuSign
        </a>
      )}
    </nav>
  );
};

export default NavBar;
