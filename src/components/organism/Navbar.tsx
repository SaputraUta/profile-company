import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItem from "../atoms/NavItem";
import { FiHome, FiPhone, FiInfo } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="bg-slate-100 py-4 px-10 flex justify-between items-center shadow-lg">
      <div className="flex gap-2 items-center">
        <Image src={"/images/logo.png"} width={35} height={35} alt="logo" />
        <h3 className="font-medium text-blue-800 tracking-wider text-xl">
          Mataram Muda Basketball
        </h3>
      </div>
      <ul className="flex space-x-10">
        <li>
          <NavItem pageLink="/">
            <FiHome />
            Home
          </NavItem>
        </li>
        <li>
          <NavItem pageLink="/about">
            <FiInfo />
            About
          </NavItem>
        </li>
        <li>
          <NavItem pageLink="/contact">
            <FiPhone />
            Contact
          </NavItem>
        </li>
      </ul>
    </nav>
  );
}
