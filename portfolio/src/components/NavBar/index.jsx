import React from "react";

export default function NavBar() {
  return (
    <nav className="nav-menu">
      <h1>Logo</h1>
      <span className="nav-menu-icon">Menu</span>
      <ul className="nav-menu-desktop">
        <li>
          <a href="#about">About</a>
        </li>
        <li>Technologies</li>
        <li>Projects</li>
      </ul>
    </nav>
  );
}
