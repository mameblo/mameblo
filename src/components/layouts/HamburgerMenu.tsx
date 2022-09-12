import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../../styles/Layouts/HamburgerMenu.module.scss";

export default function HamburgerMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };

  const me = "Me";

  return (
    <>
      <header id="header" className={styles.header}>
        <div className={styles.logo}>
          <Link href={"/"} passHref>
            <a>
              <Image
                className={styles.navImage}
                src={"/media/GOOD-DAY_mainLogo_05.png"}
                objectFit="contain"
                alt="GOOD-DAY_MainLogo"
                width={56}
                height={56}
              />
            </a>
          </Link>
        </div>
        <nav className={styles.navPC}>
          <ul>
            <li>
              <Link href="/" passHref>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/stylist" passHref>
                <a>Portfolio</a>
              </Link>
            </li>
            <li>
              <Link href="/service" passHref>
                <a>Service</a>
              </Link>
            </li>
            <li>
              <Link href="/philosophy" passHref>
                <a>Philosophy</a>
              </Link>
            </li>
            <li>
              <Link href="/company" passHref>
                <a>{me}</a>
              </Link>
            </li>
            <li className={styles.poyoyon}>
              <Link href="/" passHref>
                <a>contact</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.container}>
          <div className={styles.humburger} onClick={() => menuFunction()}>
            <span className={openMenu ? styles.open : undefined}></span>
            <span className={openMenu ? styles.open : undefined}></span>
            <p className={openMenu ? styles.open : undefined}>Menu</p>
          </div>
        </div>
      </header>
      <div
        className={`${styles.drawerMenu}
        ${openMenu ? styles.open : undefined}`}
      >
        <ul>
          <div className={styles.close} onClick={() => menuFunction()}>
            <span></span>
            <span></span>
            <p>Close</p>
          </div>
          <li>
            <Link href="/stylist" passHref>
              <a>
                <p className={styles.mainTitle}>Portfolio</p>
                <p className={styles.subTitle}>作品集</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/service" passHref>
              <a>
                <p className={styles.mainTitle}>Service</p>
                <p className={styles.subTitle}>サービス</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/philosophy" passHref>
              <a>
                <p className={styles.mainTitle}>philosophy</p>
                <p className={styles.subTitle}>理念</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/company" passHref>
              <a>
                <p className={styles.mainTitle}>{me}</p>
                <p className={styles.subTitle}>私について</p>
              </a>
            </Link>
          </li>
          <div className={styles.poyoyon}>
            <li className={styles.drawerMenuLi2}>
              <Link
                href="https://sam004.salonanswer.com/sas/reserve/goodday/staff"
                passHref
              >
                <a>
                  <p className={styles.mainTitle}>Contact</p>
                  <p className={styles.subTitle}>お問い合わせ</p>
                </a>
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
}
