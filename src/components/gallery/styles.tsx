import react from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Gallery/Gallery.module.scss";
import NamiStyles from "../../components/gallery/NamiStyles";
import MahoStyles from "../../components/gallery/MahoStyles";
import YukaStyles from "../../components/gallery/YukaStyles";
import MaiStyles from "../../components/gallery/MaiStyles";
import IkemotoStyles from "../../components/gallery/IkemotoStyles";
import FujiiStyles from "../../components/gallery/FujiiStyles";
import JohnStyles from "../../components/gallery/JohnStyles";
import DaiStyles from "../../components/gallery/DaiStyles";
import NatsukiStyles from "../../components/gallery/NatsukiStyles";
import NozomiStyles from "../../components/gallery/NozomiStyles";
import MikaStyles from "../../components/gallery/MikaStyles";
import KatayamaStyles from "../../components/gallery/KatayamaStyles";

const Styles: React.FC = () => {
  return (
    <>
      <div id="Works" className={styles.main}>
        <h2 className={styles.featuresMainTitle}>Illust</h2>
        <p className={styles.featuresMainSubTitle}>ゆるかわイラスト集</p>
        <NamiStyles />
        {/* <MahoStyles /> */}
        <YukaStyles />
        <MaiStyles />
        <p>
          <br></br>
        </p>
        <div className={styles.next}>
          <Link href={"https://instagram.com/_mameko.me_?igshid=YmMyMTA2M2Y="} passHref>
            <a className={styles.nextInner}>
              <span className={styles.nextInnerIn}>他のイラストも見る</span>
            </a>
          </Link>
        </div>
        <p>
          <br></br>
          <br></br>
        </p>
        {/* <IkemotoStyles /> */}
        {/* <FujiiStyles />
        <JohnStyles />
        <DaiStyles />
        <NatsukiStyles />
        <NozomiStyles />
        <MikaStyles />
        <KatayamaStyles /> */}
        {/* <div className={styles.next}>
          <Link href={"/recruit"} passHref>
            <a className={styles.nextInner}>
              <span className={styles.nextInnerIn}>もっと見る</span>
            </a>
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default Styles;
