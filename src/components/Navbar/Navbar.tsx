import React from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.jpg";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="navbar">
        <div className="navbar--logo" onClick={() => navigateHome()}>
          <img className="navbar--logo-image" src={logo} alt="logo" />
        </div>
        <div className="navbar--account">
          <div className="navbar--account-avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="navbar--account-name">
            <h3>Theo</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
