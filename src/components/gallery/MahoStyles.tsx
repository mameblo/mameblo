import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Gallery/Gallery.module.scss";

const stylistName: string = "土田 真帆";

const MahoStyles: React.FC = () => {
  return (
    <>
      <ul className={styles.flex}>
        <Link href={"/stylist/maho"}>
          <a>
            <li className={styles.stylistImage}>
              <Image
                className={styles.stylistImageHover}
                src={"/styles/illust02.jpg"}
                objectFit="contain"
                alt={stylistName + "のスタイル1です。"}
                width={178}
                height={240}
              />
            </li>
          </a>
        </Link>
        <Link href={"/stylist/maho"}>
          <a>
            <li className={styles.stylistImage}>
              <Image
                className={styles.stylistImageHover}
                src={"/styles/illust02_1.jpg"}
                objectFit="contain"
                alt={stylistName + "のスタイル2です。"}
                width={178}
                height={240}
              />
            </li>
          </a>
        </Link>
        <Link href={"/stylist/maho"}>
          <a>
            <li className={styles.stylistImage}>
              <Image
                className={styles.stylistImageHover}
                src={"/styles/illust02_2.jpg"}
                objectFit="contain"
                alt={stylistName + "のスタイル3です。"}
                width={178}
                height={240}
              />
            </li>
          </a>
        </Link>
      </ul>
    </>
  );
};

export default MahoStyles;
