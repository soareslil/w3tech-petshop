import React from 'react';
import { AiFillShopping } from "react-icons/ai";
import logo from "../assets/W3Tech-logo-sm-bw.png";

function Header() {

  return (
    <nav className="header-nav">
        <img src={logo} alt="img logo"/>
        <div className="cart">
          <AiFillShopping />
          <span>0</span>
        </div>
    </nav>
  );
}

export default Header;