import React, {useState} from 'react';
import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils";

export const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title}href="/"> Portfolio</a>
      <div className={styles.menu}>
        <img className={styles.menuBtn} src={
          showMenu
           ? getImageUrl("nav/close.png")
           : getImageUrl("nav/hamburger.png")
        }
         alt="menu-button"
         onClick={() => setShowMenu(!showMenu)}
         />
        <ul className={`${styles.menuItems} ${showMenu && styles.menuOpen}`}
        onClick={() => setShowMenu(false)}>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#work">work</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;