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
              <th className={styles.menuTableTh}>名前</th>
              <td className={styles.menuTableTd}>浜田 佳音</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>好きなこと</th>
              <td className={styles.menuTableTd}>
                音楽を聴くこと・アニメを見ること・イラストを描くこと
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>私を一言で表すなら</th>
              <td className={styles.menuTableTd}>
                好奇心旺盛！好きなことにまっすぐな独学デザイナー
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>
                目玉焼きには醤油かウスターソスか
              </th>
              <td className={styles.menuTableTd}>断然ウスターソース！</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>好きな食べ物</th>
              <td className={styles.menuTableTd}>
                サーモン！
                <br />
                1日3食サーモン食べたい。それぐらいサーモンが大好きです！
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>好きな音楽</th>
              <td className={styles.menuTableTd}>
                BUMP OF CHICKEN || WANIMA || Mr.Children || Mrs.GREEN APPLE
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>できること</th>
              <td className={styles.menuTableTd}>
                デザイン(Illustrator・Photoshop)
                <br />
                イラスト
                <br />
                <div className={styles.flex}>
                  <div className={styles.nemuVertical}>
                    ポートフォリオはこちら
                  </div>
                  <Link href={"/portfolio"} passHref>
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
              <th className={styles.menuTableTh}>将来の夢</th>
              <td className={styles.menuTableTd}>
                海が見えてハンモックがある家に住むこと
                <br />
                アーティストのグッズデザイン
                <br />
                オーロラを見ること
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>連絡先</th>
              <td className={styles.menuTableTd}>
                <div className={styles.flex}>
                  <div className={styles.nemuVertical}>
                    公式LINEよりsご連絡ください。
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
        </table>
      </div>
    </>
  );
}
