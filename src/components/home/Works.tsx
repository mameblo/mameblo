import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Service/Service.module.scss";

const Works: React.FC = () => {
  return (
    <>
      <div id="Works" className={styles.main}>
        <h2 className={styles.featuresMainTitle}>デザインへのこだわり</h2>
        {/* <p className={styles.featuresMainSubTitle}>スタイリストさんへ</p> */}
        <>
          <ul className={styles.flex}>
            <li className={styles.stylistImage}>
              <Image
                src={"/media/Stylist_000.png"}
                objectFit="contain"
                alt={"デザインへのこだわりその1"}
                width={240}
                height={240}
              />
            </li>
            <li className={styles.stylistImage}>
              <Image
                src={"/media/Stylist_01.png"}
                objectFit="contain"
                alt={"デザインへのこだわりその2"}
                width={240}
                height={240}
              />
            </li>
            <li className={styles.stylistImage}>
              <Image
                src={"/media/Stylist_02.png"}
                objectFit="contain"
                alt={"デザインへのこだわりその3"}
                width={240}
                height={240}
              />
            </li>
          </ul>
        </>
        <>
          {/* <ul className={styles.flex}>
            <li className={styles.stylistImage}>
              <Image
                src={"/media/Stylist_03.png"}
                objectFit="contain"
                alt={"グッディの特徴その4"}
                width={240}
                height={240}
              />
            </li>
            <li className={styles.stylistImage}>
              <Image
                src={"/media/Stylist_04.png"}
                objectFit="contain"
                alt={"グッディの特徴その5"}
                width={240}
                height={240}
              />
            </li>
            <li className={styles.stylistImage}>
              <Image
                src={"/media/Stylist_05.png"}
                objectFit="contain"
                alt={"グッディの特徴その6"}
                width={240}
                height={240}
              />
            </li>
          </ul> */}
        </>
        <div className={styles.next}>
          <Link href={"/philosophy"} passHref>
            <a className={styles.nextInner}>
              <span className={styles.nextInnerIn}>詳しくみる</span>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Works;
