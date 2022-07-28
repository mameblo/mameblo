import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Gallery/Gallery.module.scss";

const NatsukiStyles: React.FC = () => {
  return (
    <>
      <ul className={styles.flex}>
        <Link href={"/stylist/natsuki"}>
          <a>
            <li className={styles.stylistImage}>
              <Image
                className={styles.stylistImageHover}
                src={"/styles/Nami_03.jpg"}
                objectFit="contain"
                alt={"の画像です"}
                width={178}
                height={240}
              />
            </li>
          </a>
        </Link>
        <Link href={"/stylist/natsuki"}>
          <a>
            <li className={styles.stylistImage}>
              <Image
                className={styles.stylistImageHover}
                src={"/styles/Nami_01.jpg"}
                objectFit="contain"
                alt={"の画像です"}
                width={178}
                height={240}
              />
            </li>
          </a>
        </Link>
        <Link href={"/stylist/natsuki"}>
          <a>
            <li className={styles.stylistImage}>
              <Image
                className={styles.stylistImageHover}
                src={"/styles/Nami_00.jpg"}
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

export default NatsukiStyles;
