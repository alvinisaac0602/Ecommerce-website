import React from "react";

import logo from "/src/assets/logo.png";
import cart_icon from "/src/assets/cart_icon.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center ">
        <img src={logo} alt="Logo" />
        <p>Shopy</p>
      </div>
      <div>
        <ul className="flex space-x-4">
          <li>
            <a href="/">Shop</a>
          </li>
          <li>
            <a href="/men">Men</a>
          </li>
          <li>
            <a href="/women">Women</a>
          </li>
          <li>
            <a href="/">Kids</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <button>Login</button>
        <img src={cart_icon} alt="Cart Icon" />
      </div>
    </div>
  );
};

export default Header;
