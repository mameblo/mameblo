import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Layouts/Footer.module.scss";
import ToTopButton from "../home/ToTopButton";
import UnderNotice from "../../components/home/UnderNotice";

export default function Footer() {
  return (
    <footer className={styles.mainFooter}>
      <ToTopButton />
      <UnderNotice />
      <div className={styles.footerContents}>
        <div className={styles.footerBrock}>
          <Link href={"/"} passHref>
            <a>
              <Image
                className=""
                src={"/media/mameblo_logo.png"}
                objectFit="contain"
                alt={"メインロゴ"}
                width={80}
                height={80}
              />
            </a>
          </Link>
        </div>
        <div className={styles.footerBrock}>
          <Link href={"/index"} passHref>
            <a>
              <p className={styles.footerTitle}>Home</p>
            </a>
          </Link>
          <ul className={styles.footerUl}>
            <Link href={"/index"} passHref>
              <a>
                <li>ホーム</li>
              </a>
            </Link>
          </ul>
        </div>
        <div className={styles.footerBrock}>
          <Link href={"/portfolio"} passHref>
            <a>
              <p className={styles.footerTitle}>Portfolio</p>
            </a>
          </Link>
          <ul className={styles.footerUl}>
            <Link href={"/portfolio"} passHref>
              <a>
                <li>作品集</li>
              </a>
            </Link>
          </ul>
        </div>
        <div className={styles.footerBrock}>
          <Link href={"/philosophy"} passHref>
            <a>
              <p className={styles.footerTitle}>Philosophy</p>
            </a>
          </Link>
          <ul className={styles.footerUl}>
            <Link href={"/philosophy"} passHref>
              <a>
                <li>大切にしたいこと</li>
              </a>
            </Link>
          </ul>
        </div>
        {/* <div className={styles.footerBrock}>
          <Link href={"/service"} passHref>
            <a>
              <p className={styles.footerTitle}>Service</p>
            </a>
          </Link>
          <ul className={styles.footerUl}>
            <Link href={"/service/#Customer"} passHref>
              <a>
                <li>お客様へ</li>
              </a>
            </Link>
          </ul>
        </div>
        <div className={styles.footerBrock}>
          <Link href={"/company"} passHref>
            <a>
              <p className={styles.footerTitle}>Contact</p>
            </a>
          </Link>
          <ul className={styles.footerUl}>
            <Link href={"/company/#NewShop"} passHref>
              <a>
                <li>お問い合わせはこちら</li>
              </a>
            </Link>
          </ul>
        </div> */}
      </div>
      <div className={styles.rules}>
        <p className={styles.footerTitle_web}>Webサイトのご利用について</p>
        <div>
          <ul className={styles.footerContentsEven}>
            <Link href={"/sitepolicy"} passHref>
              <a>
                <li>Webサイトの利用条件</li>
              </a>
            </Link>
            <Link href={"/privacypolicy"} passHref>
              <a>
                <li>プライバシーポリシー</li>
              </a>
            </Link>
          </ul>
        </div>
      </div>
      <p className={styles.footerCopyLight}>&copy; 2022 mameblo.</p>
    </footer>
  );
}
