import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/SNS/SNS.module.scss";

export default function DaiSNS() {
  return (
    <>
      <div className={styles.sns}>
        <Link href={"https://beauty.hotpepper.jp/slnH000524394/blog/"} passHref>
          <a>
            <div className={styles.blog}></div>
          </a>
        </Link>
        <Link href={"https://www.instagram.com/dai1_11/"} passHref>
          <a>
            <div className={styles.instagram}></div>
          </a>
        </Link>
        <Link href={"https://line.me/R/ti/p/%40511gsugf"} passHref>
          <a>
            <div className={styles.line}></div>
          </a>
        </Link>
      </div>
    </>
  );
}
