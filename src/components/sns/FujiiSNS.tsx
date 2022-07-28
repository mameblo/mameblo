import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/SNS/SNS.module.scss";

export default function FujiiSNS() {
  return (
    <>
      <div className={styles.sns}>
        <Link href={"https://beauty.hotpepper.jp/slnH000524394/blog/"} passHref>
          <a>
            <div className={styles.blog}></div>
          </a>
        </Link>
        <Link href={"https://instagram.com/p/CckOzhtP3ZF/"} passHref>
          <a>
            <div className={styles.instagram}></div>
          </a>
        </Link>
        <Link href={"https://lin.ee/vJD6jFR"} passHref>
          <a>
            <div className={styles.line}></div>
          </a>
        </Link>
      </div>
    </>
  );
}
