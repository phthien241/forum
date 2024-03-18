import React from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.png"
import avatar from "../../assets/avatar.jpg";

const Navbar: React.FC = () => {
  return <>
    <div className="navbar">
        <div className="navbar--logo">
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
  </>;
};

export default Navbar;
