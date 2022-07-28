import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Gallery/Gallery.module.scss";

const MaiStyles: React.FC = () => {
  return (
    <>
      <ul className={styles.flex}>
        <Link href={"/stylist/mai"}>
          <a>
            <li className={styles.stylistImage}>
              <Image
                className={styles.stylistImageHover}
                src={"/styles/Mai_00.jpg"}
                objectFit="contain"
                alt={"の画像です"}
                width={178}
                height={240}
              />
            </li>
          </a>
        </Link>
        <Link href={"/stylist/mai"}>
          <a>
            <li className={styles.stylistImage}>
              <Image
                className={styles.stylistImageHover}
                src={"/styles/Mai_01.jpg"}
                objectFit="contain"
                alt={"の画像です"}
                width={178}
                height={240}
              />
            </li>
          </a>
        </Link>
        <Link href={"/stylist/mai"}>
          <a>
            <li className={styles.stylistImage}>
              <Image
                className={styles.stylistImageHover}
                src={"/styles/Mai_02.jpg"}
                objectFit="contain"
                alt={"の画像です"}
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

export default MaiStyles;
