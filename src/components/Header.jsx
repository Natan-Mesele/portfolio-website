import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Header() {
  return (
    <div className="flex justify-between items-center p-6 md:mx-6">
      <div className="">
        <img
          src="img/logo1.png"
          alt=""
          className="w-20 cursor-pointer"
        />
      </div>
      <div className="flex items-center gap-4 max-sm:hidden">
        <a href="#" className="font-bold text-white text-sm">About</a>
        <a href="#" className="font-bold text-white text-sm">resume</a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="w-6 h-6 text-white" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="w-6 h-6 text-white" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="w-6 h-6 text-white" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="w-6 h-6 text-white" />
        </a>
      </div>
      <div className="sm:hidden">
        <MenuIcon className="cursor-pointer text-white" />
      </div>
    </div>
  );
}

export default Header;
