import React from "react";
import "./styles.scss";

function Sidebar() {
  return (
    <div className="sidebar">
        <ul className="">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">News</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
    </div>
  );
}

export default Sidebar;
