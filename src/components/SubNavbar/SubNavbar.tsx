import React from "react";
import "./SubNavbar.scss";

const SubNavbar: React.FC = () => {
  return (
    <div className="sub-navbar">
      <div className="sub-navbar--nav">
        <h2>Hot Forum: </h2>
        <div className="sub-navbar--nav-hot">
          <h3>News</h3>
          <h3>News</h3>
          <h3>News</h3>
          <h3>News</h3>
        </div>
      </div>
    </div>
  );
};
export default SubNavbar;
