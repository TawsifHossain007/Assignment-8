import React from "react";
import { Link, NavLink } from "react-router";
import LogoImg from "../assets/logo.png";
import { Github } from "lucide-react";

const Navbar = () => {
  const links = (
    <>
      <Link to="/">
        <li className="m-2">Home</li>
      </Link>
      <Link to="/apps">
        <li className="m-2">Apps</li>
      </Link>
      <Link to="/installation">
        <li className="m-2">Installation</li>
      </Link>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex justify-center item ml-0 md:ml-8">
          <img className="h-[40px] w-[40px]" src={LogoImg} alt="" />
          <a className="btn btn-ghost text-xl text-[#632ee3]">HERO.IO</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end mr-0 md:mr-8">
        <a href="https://github.com/TawsifHossain007" target="_blank" rel="noopener noreferrer" className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white rounded-[4px]"><Github></Github> Contribute</a>
      </div>
    </div>
  );
};

export default Navbar;
