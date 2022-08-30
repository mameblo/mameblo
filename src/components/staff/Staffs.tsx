import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Stylist/Staff.module.scss";

const Staffs: React.FC = () => {
  return (
    <>
      <div>
        <h2 className={styles.mainTitle}>Portfolio</h2>
        <p className={styles.mainSubTitle}>作品集</p>
      </div>
      <div className={styles.main}>
        <div>
          <ul className={styles.flex}>
            <Link href={"/stylist/nami"}>
              <a>
                <li className={styles.stylistImage}>
                  <Image
                    className={styles.stylistImageHover}
                    src={"/media/w&m.jpg"}
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
                    src={"/media/flyer02.jpg"}
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
                    src={"/media/contents.jpg"}
                    objectFit="contain"
                    alt={"Yuka"}
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
                    src={"/media/contents01.jpg"}
                    objectFit="contain"
                    alt={"Mai"}
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
                    src={"/media/slider.jpg"}
                    objectFit="contain"
                    alt={"Ikemoto"}
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
                    src={"/media/slider01.jpg"}
                    objectFit="contain"
                    alt={"Fujii"}
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
                    src={"/media/slider02.jpg"}
                    objectFit="contain"
                    alt={"John"}
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
                    src={"/media/flyer2_01.jpg"}
                    objectFit="contain"
                    alt={"Dai"}
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
                    alt={"Natsuki"}
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
                    alt={"Nozomi"}
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
                    alt={"Mika"}
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
                    alt={"Katayama"}
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
