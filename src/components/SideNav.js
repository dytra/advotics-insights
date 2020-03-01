import React from "react";
import charticon from "../assets/chart.svg";
const SideNav = () => {
  return <nav id="side-nav">
    <ul>
      <li className="burger"><i class="fas fa-bars"></i></li>
      <li className="chartmenu"><span><img src={charticon} /></span></li>
    </ul>
  </nav>;
};

export default SideNav;
