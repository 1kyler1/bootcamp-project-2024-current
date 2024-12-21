
import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

// This navbar component is builds the navbar with links to each of my different pages
export default function Navbar() {
  return (
    <header className={style.navbar}>
      <h1 className={style.title}></h1>
      <nav role="navigation">
        <Link href="/" className={style.navLink}>Home</Link>
        <Link href="/blog" className={style.navLink}>Blogs</Link>
        <Link href="/project" className={style.navLink}>Portfolio</Link>
        <Link href="/resume" className={style.navLink}>Resume</Link>
        <Link href="/contactMe" className={style.navLink}>ContactMe</Link>
      </nav>
    </header>
  );
}