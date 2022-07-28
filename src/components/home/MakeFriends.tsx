import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Layouts/MakeFriends.module.scss";

const MakeFriends: React.FC = () => {
  return (
    <>
      <div className={styles.friendsSingle}>
        <div className={styles.friendsFlex}>
          <div className={styles.friendsLeft}>
            <Link
              href={"https://page.line.me/153jsnax?openQrModal=true"}
              passHref
            >
              <a>
                <Image
                  className={styles.friendsImage}
                  src={"/media/QR_LINE.png"}
                  objectFit="contain"
                  alt={"の画像です"}
                  width={240}
                  height={240}
                />
              </a>
            </Link>
          </div>
          <div className={styles.friendsRight}>
            <div className={styles.friendsMainTitle}>
              <Link href={""} passHref>
                <a>
                  <h2>お友達追加はこちら</h2>
                </a>
              </Link>
            </div>
            {/* Prevent HTML tags from being output */}
            <Link href={""} passHref>
              <a>
                <div className={styles.friendsBody}>
                  GOOD-DAYでスタイリストとして働いてみたいという美容師さん。お気軽にご連絡ください。
                </div>
              </a>
            </Link>
            <div className={styles.next}>
              <Link
                href={"https://page.line.me/153jsnax?openQrModal=true"}
                passHref
              >
                <a className={styles.nextInner}>
                  <span className={styles.nextInnerIn}>Add Friends</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MakeFriends;
