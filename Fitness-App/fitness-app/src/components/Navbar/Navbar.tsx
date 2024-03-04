import React from "react";
import logo from "@/assets/logo.png";
import { IoIosBody } from "react-icons/io";
import "./Navbar.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Image src={logo} alt="logo"></Image>
      <Link href="/">Home</Link>
      <Link href="/about">about</Link>
      <Link href="/profile">profile</Link>
      <button>Sign Out</button>
    </nav>
  );
};

export default Navbar;
