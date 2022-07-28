import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Company/Company.module.scss";

export default function NewShop() {
  return (
    <>
      <div id="NewShop" className={styles.menu}>
        <h2 className={styles.menuTitle}>新店舗情報</h2>
        <table className={styles.menuArea}>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>店舗名</th>
              <td className={styles.menuTableTd}>GOOD-DAY 岡山新店舗</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>会員募集</th>
              <td className={styles.menuTableTd}>応募受付中</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>応募方法</th>
              <td className={styles.menuTableTd}>
                <div className={styles.flex}>
                  <div className={styles.nemuVertical}>
                    公式LINEよりご連絡ください。
                  </div>
                  <Link href={"https://line.me/R/ti/p/%40511gsugf"} passHref>
                    <a>
                      <div className={styles.line}></div>
                    </a>
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>Open日時</th>
              <td className={styles.menuTableTd}>2022年11月を予定</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>所在地</th>
              <td className={styles.menuTableTd}>
                未定(決まり次第お知らせします)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
