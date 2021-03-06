import React from "react";
import logo from "../assets/logo.png";
import profilePicture from "../assets/profile.svg";
const TopNav = () => {
  return <nav id="top-nav">
    <div className="left">
      <div className="logo"><img src={logo} alt="advotics logo" /></div>

    </div>
    <div className="right">
      <div id="user-info">
        <div className="profile-info">
          <p className="username">Username</p><p className="company-name">Company Name</p>
        </div>
        <div className="profile-picture"><img src={profilePicture} alt="profile" /></div>
      </div>
      <button id="btn-logout"><i className="fas fa-sign-out-alt"></i></button>
    </div>
  </nav>;
};

export default TopNav;
