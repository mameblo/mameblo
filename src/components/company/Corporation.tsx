import React from "react";
import Link from "next/link";
import Image from "next/image";
import MapPage from "../../components/company/MapPage";
import styles from "../../styles/Company/Company.module.scss";

export default function Corporation() {
  return (
    <>
      <div id="Corporation" className={styles.menu}>
        <h2 className={styles.menuTitle}>会社概要</h2>
        <table className={styles.menuArea}>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>社名</th>
              <td className={styles.menuTableTd}>株式会社OneStep</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>本社</th>
              <td className={styles.menuTableTd}>岡山県倉敷市笹沖449-4</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>Tel</th>
              <td className={styles.menuTableTd}>
                <div className={styles.next}>
                  <Link href={"tel:086-454-7373"} passHref>
                    <a className={styles.nextInner}>
                      <span className={styles.nextInnerIn}>
                        call someone !!
                      </span>
                    </a>
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>Mail</th>
              <td className={styles.menuTableTd}>info@goodday-salon.jp</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>代表取締役</th>
              <td className={styles.menuTableTd}>見垣 義則</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>資本金</th>
              <td className={styles.menuTableTd}>5,000,000円</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>事業内容</th>
              <td className={styles.menuTableTd}>美容業</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
