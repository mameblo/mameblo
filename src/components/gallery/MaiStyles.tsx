import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Gallery/Gallery.module.scss";

const stylistName: string = "今石 麻依";

const MaiStyles: React.FC = () => {
  return (
    <>
      <ul className={styles.flex}>
        <a>
          <li className={styles.stylistImage}>
            <Image
              className={styles.stylistImageHover}
              src={"/styles/illust03_4.jpg"}
              objectFit="contain"
              alt={stylistName + "のスタイル1です。"}
              width={178}
              height={240}
            />
          </li>
        </a>
        <a>
          <li className={styles.stylistImage}>
            <Image
              className={styles.stylistImageHover}
              src={"/styles/illust034.jpg"}
              objectFit="contain"
              alt={stylistName + "のスタイル2です。"}
              width={178}
              height={240}
            />
          </li>
        </a>
        <a>
          <li className={styles.stylistImage}>
            <Image
              className={styles.stylistImageHover}
              src={"/styles/illust03_4.jpg"}
              objectFit="contain"
              alt={stylistName + "のスタイル3です。"}
              width={178}
              height={240}
            />
          </li>
        </a>
      </ul>
    </>
  );
};

export default MaiStyles;
