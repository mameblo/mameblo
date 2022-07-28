import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/SNS/SNS.module.scss";

export default function JohnSNS() {
  return (
    <>
      <div className={styles.sns}>
        <Link href={"https://beauty.hotpepper.jp/slnH000524394/blog/"} passHref>
          <a>
            <div className={styles.blog}></div>
          </a>
        </Link>
        <Link href={"https://www.instagram.com/kanda.toshikazu/"} passHref>
          <a>
            <div className={styles.instagram}></div>
          </a>
        </Link>
        <Link href={"https://lin.ee/eYG7zAE"} passHref>
          <a>
            <div className={styles.line}></div>
          </a>
        </Link>
      </div>
    </>
  );
}
