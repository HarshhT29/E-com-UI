import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav id="header" className="flex  items-center justify-between p-5 bg-opacity-60 shadow-md sticky top-0 backdrop-blur-md">
        <a href="#">
          <img src="/logo.png" className="logo" alt="Company Logo" />
        </a>
        <div className="navbarContainer">
          <ul id="navbar" className="flex items-center justify-center hidden">
            <li className="list-none px-4">
              <a className="text-lg font-semibold text-gray-900 hover:text-green-600" href="/">
                Home
              </a>
            </li>
            <li className="list-none px-4">
              <Link className="text-lg font-semibold text-gray-900 hover:text-green-600" href="/shop">
                Shop
              </Link>
            </li>
            <li className="list-none px-4">
              <a className="text-lg font-semibold text-gray-900 hover:text-green-600" href="/blog">
                Blog
              </a>
            </li>
            <li className="list-none px-4">
              <a className="text-lg font-semibold text-gray-900 hover:text-green-600" href="/about">
                About
              </a>
            </li>
            <li className="list-none px-4">
              <a className="text-lg font-semibold text-gray-900 hover:text-green-600" href="/contact">
                Contact
              </a>
            </li>
            <li className="list-none px-4">
              <a href="cart.html" id="cartSymbol" className="text-lg font-semibold text-gray-900">
                <i className="fa-solid fa-cart-plus"></i>
              </a>
            </li>
            <li className="list-none px-4">
              <a href="#" id="close" className="text-lg font-semibold text-gray-900">
                <i className="fa fa-times"></i>
              </a>
            </li>
          </ul>
        </div>
        <div id="mobile" className="hidden items-center">
          <a href="cart.html" className="text-lg font-semibold text-gray-900">
            <i className="fa-solid fa-cart-plus"></i>
          </a>
          <i id="bar" className="fas fa-outdent text-lg font-semibold text-gray-900"></i>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
