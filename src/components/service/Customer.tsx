import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Service/Service.module.scss";

const Customer: React.FC = () => {
  return (
    <>
      <div id="Customer" className={styles.main}>
        {/* <h2 className={styles.featuresMainTitle}>お客様へ</h2>
        <p className={styles.featuresMainSubTitle}>デザイン料金設定について</p> */}
        <>
          <ul className={styles.flex}>
            <li>
              <Image
                src={"/media/serviced02.png"}
                objectFit="contain"
                alt={"こだわり1"}
                width={240}
                height={240}
              />
              <p className={styles.fontBord}>A4チラシ片面</p>
              <p>¥30,000〜</p>
            </li>
            <li>
              <Image
                src={"/media/serviced04.png"}
                objectFit="contain"
                alt={"こだわり2"}
                width={240}
                height={240}
              />
              <p className={styles.fontBord}>名刺デザイン</p>
              <p>¥25,000〜</p>
            </li>
          </ul>
        </>
        <>
          <ul className={styles.flex}>
            <li>
              <Image
                src={"/media/serviced01.png"}
                objectFit="contain"
                alt={"こだわり3"}
                width={240}
                height={240}
              />
              <p className={styles.fontBord}>ロゴ制作</p>
              <p>¥50,000〜</p>
            </li>
            <li>
              <Image
                src={"/media/serviced03.png"}
                objectFit="contain"
                alt={"こだわり4"}
                width={240}
                height={240}
              />
              <p className={styles.fontBord}>バナー・スライダー画像</p>
              <p>1枚 ¥7,000〜(サイズにより変動あり)</p>
            </li>
          </ul>
          <div className={styles.customerP}>
            <p>上記は一例です。その他にもデザインでお力になれることはたくさんあるかと思います。</p>
            <br></br>
            <p>『素敵なものを作りたい』という思いを一緒に共有しませんか？</p>
            <br></br>
            <p>詳しい内容などについてはまずはご連絡ください。</p>
          </div>
        </>
        {/* <>
          <ul className={styles.flex}>
            <li>
              <Image
                src={"/media/Customer_04.png"}
                objectFit="contain"
                alt={"こだわり5"}
                width={240}
                height={240}
              />
              <p className={styles.fontBord}>スマホで楽々予約</p>
              <p>簡単に予約ができちゃいます。</p>
            </li>
            <li>
              <Image
                src={"/media/Customer_05.png"}
                objectFit="contain"
                alt={"こだわり6"}
                width={240}
                height={240}
              />
              <p className={styles.fontBord}>安心の技術補償</p>
              <p>1週間以内のお直し無料です。</p>
            </li>
          </ul>
        </> */}
        <p>
          <br></br>
        </p>
        <div className={styles.next}>
          <Link
            href={"https://sam004.salonanswer.com/sas/reserve/goodday/staff"}
            passHref
          >
            <a className={styles.nextInner}>
              <span className={styles.nextInnerIn}>
                お問い合わせ・ご連絡はこちら
              </span>
            </a>
          </Link>
        </div>
        <p>
          <br></br>
        </p>
      </div>
    </>
  );
};

export default Customer;
