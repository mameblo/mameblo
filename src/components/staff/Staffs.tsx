import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Stylist/Staff.module.scss";

const Staffs: React.FC = () => {
  return (
    <>
      <div>
        <h2 className={styles.mainTitle}>Stylists</h2>
        <p className={styles.mainSubTitle}>スタイリスト一覧</p>
      </div>
      <div className={styles.main}>
        <div>
          <ul className={styles.flex}>
            <Link href={"/stylist/nami"}>
              <a>
                <li className={styles.stylistImage}>
                  <Image
                    className={styles.stylistImageHover}
                    src={"/media/Nami_01.jpg"}
                    objectFit="contain"
                    alt={"Nami"}
                    width={240}
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
                    src={"/media/Maho_01.jpg"}
                    objectFit="contain"
                    alt={"Maho"}
                    width={240}
                    height={240}
                  />
                </li>
              </a>
            </Link>
            <Link href={"/stylist/yuka"}>
              <a>
                <li className={styles.stylistImage}>
                  <Image
                    className={styles.stylistImageHover}
                    src={"/media/Yuka_01.jpg"}
                    objectFit="contain"
                    alt={"の画像です"}
                    width={240}
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
                    src={"/media/Mai_01.jpg"}
                    objectFit="contain"
                    alt={"Nami"}
                    width={240}
                    height={240}
                  />
                </li>
              </a>
            </Link>
            <Link href={"/stylist/ikemoto"}>
              <a>
                <li className={styles.stylistImage}>
                  <Image
                    className={styles.stylistImageHover}
                    src={"/media/Ikemoto_01.jpg"}
                    objectFit="contain"
                    alt={"Maho"}
                    width={240}
                    height={240}
                  />
                </li>
              </a>
            </Link>
            <Link href={"/stylist/fujii"}>
              <a>
                <li className={styles.stylistImage}>
                  <Image
                    className={styles.stylistImageHover}
                    src={"/media/Fujii_01.jpg"}
                    objectFit="contain"
                    alt={"の画像です"}
                    width={240}
                    height={240}
                  />
                </li>
              </a>
            </Link>
          </ul>
        </div>
        <div>
          <ul className={styles.flex}>
            <Link href={"/stylist/john"}>
              <a>
                <li className={styles.stylistImage}>
                  <Image
                    className={styles.stylistImageHover}
                    src={"/media/John_01.jpg"}
                    objectFit="contain"
                    alt={"Nami"}
                    width={240}
                    height={240}
                  />
                </li>
              </a>
            </Link>
            <Link href={"/stylist/dai"}>
              <a>
                <li className={styles.stylistImage}>
                  <Image
                    className={styles.stylistImageHover}
                    src={"/media/Dai_01.jpg"}
                    objectFit="contain"
                    alt={"Maho"}
                    width={240}
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
                    src={"/media/Natsuki_01.jpg"}
                    objectFit="contain"
                    alt={"の画像です"}
                    width={240}
                    height={240}
                  />
                </li>
              </a>
            </Link>
            <Link href={"/stylist/nozomi"}>
              <a>
                <li className={styles.stylistImage}>
                  <Image
                    className={styles.stylistImageHover}
                    src={"/media/Nozomi_01.jpg"}
                    objectFit="contain"
                    alt={"Nami"}
                    width={240}
                    height={240}
                  />
                </li>
              </a>
            </Link>
            <Link href={"/stylist/mika"}>
              <a>
                <li className={styles.stylistImage}>
                  <Image
                    className={styles.stylistImageHover}
                    src={"/media/Mika_01.jpg"}
                    objectFit="contain"
                    alt={"Maho"}
                    width={240}
                    height={240}
                  />
                </li>
              </a>
            </Link>
            <Link href={"/stylist/katayama"}>
              <a>
                <li className={styles.stylistImage}>
                  <Image
                    className={styles.stylistImageHover}
                    src={"/media/Katayama_01.jpg"}
                    objectFit="contain"
                    alt={"の画像です"}
                    width={240}
                    height={240}
                  />
                </li>
              </a>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Staffs;
