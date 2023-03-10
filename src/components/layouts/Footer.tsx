import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Layouts/Footer.module.scss";
import ToTopButton from "../home/ToTopButton";
import UnderNotice from "../../components/home/UnderNotice";
// import data from "../../data/shops.json";

export default function Footer() {
  // const nakashima = data.nakashima;
  // const noda = data.noda;
  return (
    <footer className={styles.mainFooter}>
      <ToTopButton />
      {/* <UnderNotice /> */}
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
        {/* <div className={styles.footerUl}>
            {noda.map((shop) => {
              return (
                <ul key={shop.shop_id}>
                  <Link href={`/company/${shop.url}`} passHref>
                    <a>
                      <li>{shop.name}</li>
                    </a>
                  </Link>
                </ul>
              );
            })}
          </div> */}
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
