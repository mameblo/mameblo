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
                src={"/media/mameblo_logo.png"}
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
              <Link href="/portfolio" passHref>
                <a>Portfolio</a>
              </Link>
            </li>
            <li>
              <Link href="/philosophy" passHref>
                <a>Philosophy</a>
              </Link>
            </li>
            <li>
              <Link href="/aboutme" passHref>
                <a>About me</a>
              </Link>
            </li>
            {/* <li>
              <Link href="/service" passHref>
                <a>Service</a>
              </Link>
            </li>
            <li className={styles.poyoyon}>
              <Link href="/" passHref>
                <a>contact</a>
              </Link>
            </li> */}
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
            <Link href="/portfolio" passHref>
              <a>
                <p className={styles.mainTitle}>Portfolio</p>
                <p className={styles.subTitle}>?????????</p>
              </a>
            </Link>
          </li>
          {/* <li>
            <Link href="/service" passHref>
              <a>
                <p className={styles.mainTitle}>Service</p>
                <p className={styles.subTitle}>????????????</p>
              </a>
            </Link>
          </li> */}
          <li>
            <Link href="/philosophy" passHref>
              <a>
                <p className={styles.mainTitle}>philosophy</p>
                <p className={styles.subTitle}>
                  ?????????????????????????????????????????????????????????
                </p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/aboutme" passHref>
              <a>
                <p className={styles.mainTitle}>About me</p>
                <p className={styles.subTitle}>???????????????</p>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
