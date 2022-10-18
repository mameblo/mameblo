import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Stylist/Staff.module.scss";

const Staffs: React.FC = () => {
  // ここに画像を配列として格納する
  const images: string[] = [];
  return (
    <>
      <div>
        <h2 className={styles.mainTitle}>Portfolio</h2>
        <p className={styles.mainSubTitle}>作品集</p>
      </div>

      <div className={styles.main}>
        <div>
          <ul className={styles.flex}>
            {/* 画像を順番に出力する */}
            {images.map((url, key) => (
              <div key={key}>
                <Image
                  src={url}
                  height={500}
                  width={315}
                  alt={"画像です。"}
                  objectFit="contain"
                />
              </div>
            ))}
          </ul>
        </div>

        <div>
          <ul>
            <ul className={styles.flex}>
              <Link href={"/portfolio/fukuya"}>
                <a>
                  <li className={styles.stylistImage}>
                    <Image
                      className={styles.stylistImageHover}
                      src={"/media/namecard_00.jpg"}
                      objectFit="contain"
                      alt={"Dai"}
                      width={240}
                      height={240}
                    />
                  </li>
                </a>
              </Link>
              <Link href={"/portfolio/hre"}>
                <a>
                  <li className={styles.stylistImage}>
                    <Image
                      className={styles.stylistImageHover}
                      src={"/media/namecard_01.jpg"}
                      objectFit="contain"
                      alt={"Natsuki"}
                      width={240}
                      height={240}
                    />
                  </li>
                </a>
              </Link>
              <Link href={"/portfolio/fukuya01"}>
                <a>
                  <li className={styles.stylistImage}>
                    <Image
                      className={styles.stylistImageHover}
                      src={"/media/namecard_02.jpg"}
                      objectFit="contain"
                      alt={"Nozomi"}
                      width={240}
                      height={240}
                    />
                  </li>
                </a>
              </Link>
            </ul>
          </ul>
          <ul>
            <ul className={styles.flex}>
              <Link href={"/portfolio/hre_logo"}>
                <a>
                  <li className={styles.stylistImage}>
                    <Image
                      className={styles.stylistImageHover}
                      src={"/media/logo.jpg"}
                      objectFit="contain"
                      alt={"John"}
                      width={240}
                      height={240}
                    />
                  </li>
                </a>
              </Link>
              {/* test00の部分はmicrocms側のコンテンツidと一致させる必要がある */}
              <Link href={"/portfolio/ticket00"}>
                <a>
                  <li className={styles.stylistImage}>
                    <Image
                      className={styles.stylistImageHover}
                      src={"/media/ticket00.jpg"}
                      objectFit="contain"
                      alt={"Mika"}
                      width={240}
                      height={240}
                    />
                  </li>
                </a>
              </Link>
              <Link href={"/portfolio/ticket01"}>
                <a>
                  <li className={styles.stylistImage}>
                    <Image
                      className={styles.stylistImageHover}
                      src={"/media/ticket01.jpg"}
                      objectFit="contain"
                      alt={"Katayama"}
                      width={240}
                      height={240}
                    />
                  </li>
                </a>
              </Link>
            </ul>
          </ul>
          <ul>
            <ul className={styles.flex}>
              <Link href={"/portfolio/flyer00"}>
                <a>
                  <li className={styles.stylistImage}>
                    <Image
                      className={styles.stylistImageHover}
                      src={"/media/flyer03.jpg"}
                      objectFit="contain"
                      alt={"John"}
                      width={240}
                      height={240}
                    />
                  </li>
                </a>
              </Link>
              <Link href={"/portfolio/flyer01"}>
                <a>
                  <li className={styles.stylistImage}>
                    <Image
                      className={styles.stylistImageHover}
                      src={"/media/flyer04.jpg"}
                      objectFit="contain"
                      alt={"Dai"}
                      width={240}
                      height={240}
                    />
                  </li>
                </a>
              </Link>
              <Link href={"/portfolio/flyer02"}>
                <a>
                  <li className={styles.stylistImage}>
                    <Image
                      className={styles.stylistImageHover}
                      src={"/media/flyer05.jpg"}
                      objectFit="contain"
                      alt={"Natsuki"}
                      width={240}
                      height={240}
                    />
                  </li>
                </a>
              </Link>
            </ul>
            <p>
              <br></br>
              <br></br>
            </p>
            <div className={styles.next}>
              <Link href={"/portfolio"} passHref>
                <a className={styles.nextInner}>
                  <span className={styles.nextInnerIn}>他の作品も見る</span>
                </a>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Staffs;
