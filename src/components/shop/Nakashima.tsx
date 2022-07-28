import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Shop/Nakashima.module.scss";

export default function NakashimaShopInfo() {
  return (
    <>
      <div id="Nakashima" className={styles.main}>
        <h2 className={styles.menuTitle}>倉敷中島店</h2>
        <table className={styles.menuArea}>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>店舗名</th>
              <td className={styles.menuTableTd}>GOOD-DAY 倉敷中島店</td>
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
              <th className={styles.menuTableTh}>住所</th>
              <td className={styles.menuTableTd}>
                〒710-0803 岡山県倉敷市中島795-1
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>営業時間</th>
              <td className={styles.menuTableTd}>09:00〜24:00</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>定休日</th>
              <td className={styles.menuTableTd}>不定休</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>支払方法</th>
              <td className={styles.menuTableTd}>
                VISA/MasterCard/JCB/AmericanExpress/Diners/Discover/PayPay/楽天ペイ/auPAY/d払い/メルペイ
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>カット価格</th>
              <td className={styles.menuTableTd}>¥4,400〜</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>席数</th>
              <td className={styles.menuTableTd}>7席</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>スタイリスト</th>
              <td className={styles.menuTableTd}>12名</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>駐車場</th>
              <td className={styles.menuTableTd}>17台</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>こだわり</th>
              <td className={styles.menuTableTd}>
                駐車場あり/夜19時以降も受付OK/一人のスタイリストが仕上げまで担当/年中無休/ヘアセット/着付け/朝10時前でも受付OK/カード支払いOK/女性スタッフが多い/完全予約制/個室あり/お子さま同伴可/禁煙/半個室あり
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>備考</th>
              <td className={styles.menuTableTd}>
                グッディでは、スムーズなご案内とお待たせしない接客を実現するために完全予約&amp;指名制としています。ご予約&amp;ご質問については、店舗またはスタイリストまで直接ご確認ください。
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
