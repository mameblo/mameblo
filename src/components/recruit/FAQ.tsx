import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Recruit/FAQ.module.scss";

export default function FAQ() {
  return (
    <>
      <div className={styles.accordionArea}>
        <h2 id="FAQ" className={styles.accordionTitle}>
          よくある質問(FAQ)
        </h2>
        <input
          id="accordionCheck0"
          className={styles.accordionCheck}
          type="checkbox"
        ></input>
        <label className={styles.accordionLabel} htmlFor="accordionCheck0">
          シェアサロンって何ですか??
        </label>
        <div className={styles.accordionContent}>
          <p>
            弊社の解釈になりますが、シェアサロンとは「美容師さんと弊社でフリーランス契約を結び、月額利用料をお支払いいただきセットブースをレンタルすることで、売り上げの70%を報酬としてお支払いする新しい働き方ができるヘアサロン」のことです。
            <br />
            <br />
            必要な時に必要な分だけグッディを使うことができます。
          </p>
        </div>
        <input
          id="accordionCheck1"
          className={styles.accordionCheck}
          type="checkbox"
        ></input>
        <label className={styles.accordionLabel} htmlFor="accordionCheck1">
          会員制って何ですか？
        </label>
        <div className={styles.accordionContent}>
          <p>
            毎月、月額(税込)を納めていただき、GOOD-DAYを利用できる会員になっていただきます。(会員のみシェアサロンを利用することが可能です。)
            <br />
            <br />
            初回は初回登録料と、月額が必要になります。
            <br />
            <br />
            尚、解約の際は解約金は必要ありません。(ただし事前のご相談が必要です)
          </p>
        </div>
        <input
          id="accordionCheck2"
          className={styles.accordionCheck}
          type="checkbox"
        ></input>
        <label className={styles.accordionLabel} htmlFor="accordionCheck2">
          集客サポートはありますか？
        </label>
        <div className={styles.accordionContent}>
          <p>
            ホットペッパービューティー(HPB)や、SNSを運用するなどし集客サポートをさせていただきます。
            <br />
            <br />
            グッディで働いて、ある程度の余裕が出て参りましたら個別でSNS集客のやり方やコツなどをレクチャーさせていただきます。
            <br />
            <br />
            その後、独立の際に役立つスキルなので是非身につけていきましょう。
          </p>
        </div>
        <input
          id="accordionCheck3"
          className={styles.accordionCheck}
          type="checkbox"
        ></input>
        <label className={styles.accordionLabel} htmlFor="accordionCheck3">
          施術料はいくらですか？
        </label>
        <div className={styles.accordionContent}>
          <p>
            施術料は各スタイリストで自由に設定していただきます。
            <br />
            <br />
            予めご自身で提供メニュー、料金、時間をご検討いただくとスタートがスムーズです。
          </p>
        </div>
        <input
          id="accordionCheck4"
          className={styles.accordionCheck}
          type="checkbox"
        ></input>
        <label className={styles.accordionLabel} htmlFor="accordionCheck4">
          薬剤は自分で準備しますか？
        </label>
        <div className={styles.accordionContent}>
          <p>
            ご自身でご準備ください。
            <br />
            <br />
            人によっては、使ったことがない薬剤、慣れていない薬剤があるかと存じます。
            <br />
            <br />
            グッディが指定する薬剤はございませんので、仕入れ、在庫管理など全てご自身でご対応ください。(一部店舗ではグッディが準備しています)
          </p>
        </div>
        <input
          id="accordionCheck5"
          className={styles.accordionCheck}
          type="checkbox"
        ></input>
        <label className={styles.accordionLabel} htmlFor="accordionCheck5">
          営業時間はありますか？
        </label>
        <div className={styles.accordionContent}>
          <p>
            お店自体は09:00〜24:00の間営業を行います。
            <br />
            <br />
            スタイリストは、全ての時間勤務する必要はございません。
            <br />
            <br />
            お客様のご希望に合わせて、ご自身でスケジュールを組んでいただきます。
          </p>
        </div>
        <input
          id="accordionCheck6"
          className={styles.accordionCheck}
          type="checkbox"
        ></input>
        <label className={styles.accordionLabel} htmlFor="accordionCheck6">
          解約金はありますか？
        </label>
        <div className={styles.accordionContent}>
          <p>
            解約金はございません。
            <br />
            <br />
            ただし、お客様への周知や手続きの為、退会する場合には最低1ヶ月前にはご申告ください。
          </p>
        </div>
        <input
          id="accordionCheck7"
          className={styles.accordionCheck}
          type="checkbox"
        ></input>
        <label className={styles.accordionLabel} htmlFor="accordionCheck7">
          お店にあるカラー剤は何？
        </label>
        <div className={styles.accordionContent}>
          <p>
            一部店舗のみとなりますが、おしゃれ染はMILBONのORDEVEです。
            <br />
            <br />
            グレイカラーはナプラです。
          </p>
        </div>
        {/* 必要になったタイミングで増やしましょう。
        <Link href={"/"} passHref>
          <a>
            <p className={styles.more}>もっと見る</p>
          </a>
        </Link> */}
      </div>
    </>
  );
}
