import Link from "next/link";
import React from "react";
import css from "./main-header.module.css";

import logo from "@/assets/logo.png";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />

      <header className={css.header}>
        <Link className={css.logo} href='/'>
          <Image src={logo} alt='A plate with food on it' priority />
          NextLevel Food
        </Link>

        <nav className={css.nav}>
          <ul>
            <li>
              <NavLink href='/meals'> Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href='/community'>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
