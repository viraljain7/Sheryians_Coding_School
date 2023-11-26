import React from "react";
import "./Header.css";
import Link from "next/link";

function Click() {
  //   var header = document.className("main-nav ul");
  var header = document.querySelector(".main-nav ul");
  header.classList.toggle("active");
}

function Header(props) {
  return (
    <header className="main-header">
      <Link href="index.html" className="brand-logo">
        <div className="brand-logo-name">
          <h1>{props.username}</h1>
        </div>
      </Link>
      <div href="#" className="toggle-button" onClick={Click}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <nav className="main-nav">
        <ul>
          <li>
            <Link href="/About">About</Link>
          </li>
          <li>
            <Link href="/Team">Team</Link>
          </li>
          <li>
            <Link href="/Event">Event Highlights</Link>
          </li>
          <li>
            <Link href="/Collab">Collaboration</Link>
          </li>
          <li>
            <Link href="/Contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
