import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Service/Service.module.scss";

const ToStylist: React.FC = () => {
  return (
    <>
      <div id="ToStylist" className={styles.main}>
        <h2 className={styles.featuresMainTitle}>GOOD-DAYで働く</h2>
        <p className={styles.featuresMainSubTitle}>スタイリストさんへ</p>
        <>
          <ul className={styles.flex}>
            <li className={styles.stylistImage}>
              <Image
                src={"/media/Stylist_00.png"}
                objectFit="contain"
                alt={"の画像です"}
                width={240}
                height={240}
              />
              <p className={styles.fontBord}>収入Upも夢じゃない</p>
              <p>夢のために貯金できます。</p>
            </li>
            <li className={styles.stylistImage}>
              <Image
                src={"/media/Stylist_01.png"}
                objectFit="contain"
                alt={"の画像です"}
                width={240}
                height={240}
              />
              <p className={styles.fontBord}>脅威の歩合</p>
              <p>やりがいと価値を感じて欲しい。</p>
            </li>
            <li className={styles.stylistImage}>
              <Image
                src={"/media/Stylist_02.png"}
                objectFit="contain"
                alt={"の画像です"}
                width={240}
                height={240}
              />
              <p className={styles.fontBord}>周りの目が気にならない</p>
              <p>いつもよりお客様もリラックス</p>
            </li>
          </ul>
        </>
        <>
          <ul className={styles.flex}>
            <li className={styles.stylistImage}>
              <Image
                src={"/media/Stylist_03.png"}
                objectFit="contain"
                alt={"の画像です"}
                width={240}
                height={240}
              />
              <p className={styles.fontBord}>コレを提供したかった…</p>
              <p>仕入も、持ち込みも自由です。</p>
            </li>
            <li className={styles.stylistImage}>
              <Image
                src={"/media/Stylist_04.png"}
                objectFit="contain"
                alt={"の画像です"}
                width={240}
                height={240}
              />
              <p className={styles.fontBord}>土日祝休めちゃう</p>
              <p>バランスを見て、好きなだけ。</p>
            </li>
            <li className={styles.stylistImage}>
              <Image
                src={"/media/Stylist_05.png"}
                objectFit="contain"
                alt={"の画像です"}
                width={240}
                height={240}
              />
              <p className={styles.fontBord}>意外だけど真理</p>
              <p>自分のペースで仕事できるから◎</p>
            </li>
          </ul>
        </>
        <>
          <ul className={styles.flex}>
            <li className={styles.stylistImage}>
              <Image
                src={"/media/Stylist_06.png"}
                objectFit="contain"
                alt={"の画像です"}
                width={240}
                height={240}
              />
              <p className={styles.fontBord}>お店が負担します①</p>
              <p>タオルを気にせず営業。</p>
            </li>
            <li className={styles.stylistImage}>
              <Image
                src={"/media/Stylist_07.png"}
                objectFit="contain"
                alt={"の画像です"}
                width={240}
                height={240}
              />
              <p className={styles.fontBord}>お店が負担します②</p>
              <p>システムトリートメントも。</p>
            </li>
            <li className={styles.stylistImage}>
              <Image
                src={"/media/Stylist_08.png"}
                objectFit="contain"
                alt={"の画像です"}
                width={240}
                height={240}
              />
              <p className={styles.fontBord}>GOOD-DAYのその先へ</p>
              <p>独立に必要な知識やノウハウを。</p>
            </li>
          </ul>
        </>
        <div className={styles.next}>
          <Link href={"/recruit"} passHref>
            <a className={styles.nextInner}>
              <span className={styles.nextInnerIn}>募集条件を見る</span>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ToStylist;
