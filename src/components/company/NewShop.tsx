import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Company/Company.module.scss";

export default function NewShop() {
  return (
    <>
      <div id="NewShop" className={styles.menu}>
        <h2 className={styles.menuTitle}>わたしについて</h2>
        <div className={styles.shopImg}>
          <Image
            src={"/media/topimg.jpg"}
            objectFit="contain"
            alt={"commig soon !!"}
            width={1920}
            height={1060}
          />
        </div>
        <table className={styles.menuArea}>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>どんなことを学んできたか</th>
              <td className={styles.menuTableTd}>デザイン・プログラミング(HTML,CSS,Java,JavaScriptなど)・広告運用・簿記・マーケティング・地域活性化活動など
              <br />
              <br />
              私は学生時代美術部にも入らず、デザインの専門学校にも美術大学にも行っておりません。
              <br />
              独学でデザインを学んできました。
              <br />
              今後は独学でデザインを学びたい人の力になれるようなことをしたいとも考えています！</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>なぜデザインが好きか</th>
              <td className={styles.menuTableTd}>応募受付中</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>趣味</th>
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
              <th className={styles.menuTableTh}>大切にしていること</th>
              <td className={styles.menuTableTd}>2022年11月を予定</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>人と違うなと思うところ</th>
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
