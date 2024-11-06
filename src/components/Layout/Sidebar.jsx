"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./sidebar.module.scss";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.lists}>
          <li className={pathname === "/" ? styles.active : ""}>
            <Link href="/">
              <div className={styles.navIcon}>
                <img src="/images/navbar/home.svg" alt="icon" />
              </div>
              <span className={styles.linkText}>Dashboard</span>
            </Link>
          </li>
          <li className={pathname === "/profile" ? styles.active : ""}>
            <Link href="/profile">
              <div className={styles.navIcon}>
                <img src="/images/navbar/user.svg" alt="icon" />
              </div>
              <span className={styles.linkText}>Profile</span>
            </Link>
          </li>
          <li className={pathname === "/settings" ? styles.active : ""}>
            <Link href="/settings">
              <div className={styles.navIcon}>
                <img src="/images/navbar/setting.svg" alt="icon" />
              </div>
              <span className={styles.linkText}>Settings</span>
            </Link>
          </li>
          <li className={pathname === "/logout" ? styles.active : ""}>
            <Link href="/logout">
              <div className={styles.navIcon}>
                <img src="/images/navbar/logout.svg" alt="icon" />
              </div>
              <span className={styles.linkText}>Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
