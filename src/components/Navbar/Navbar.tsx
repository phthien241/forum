import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import UserProfile from "../UserProfile/UserProfile";
import { useAuthenticator } from "@aws-amplify/ui-react";

const Navbar: React.FC = () => {
  const { route } = useAuthenticator((context) => [context.route]);
  const { user } = useAuthenticator((context) => [context.user]);
  console.log(route);
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };
  const handleClick = () =>{
    navigate("/login");
  }

  return (
    <>
      <div className="navbar">
        <div className="navbar--logo" onClick={() => navigateHome()}>
          <img className="navbar--logo-image" src={logo} alt="logo" />
        </div>
        {user ? (
          <UserProfile />
        ) : (
          <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
        )}
      </div>
    </>
  );
};

export default Navbar;
