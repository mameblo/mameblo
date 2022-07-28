import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Pagination/Pagination.module.scss";

export default function DaiPagination() {
  return (
    <>
      <div className={styles.nextFlex}>
        <div className={styles.next}>
          <Link href={"john"} passHref>
            <a className={styles.nextInner}>
              <span className={styles.nextInnerIn}>Back</span>
            </a>
          </Link>
        </div>
        <div className={styles.next}>
          <Link href={"natsuki"} passHref>
            <a className={styles.nextInner}>
              <span className={styles.nextInnerIn}>Next</span>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
