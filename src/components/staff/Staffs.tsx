import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Stylist/Staff.module.scss";

const Staffs: React.FC = () => {

  // ここに画像を配列として格納する
  const images: string[] = [

  ];
  
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
          <ul className={styles.flex}>
            <Link href={"/stylist/john"}>
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
            <Link href={"/stylist/dai"}>
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
            <Link href={"/stylist/natsuki"}>
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
            <Link href={"/stylist/nozomi"}>
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
            {/* test00の部分はmicrocms側のコンテンツidと一致させる必要がある */}
            <Link href={"/stylist/test00"}>
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
            <Link href={"/stylist/katayama"}>
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
          <ul className={styles.flex}>
            <Link href={"/stylist/john"}>
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
            <Link href={"/stylist/dai"}>
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
            <Link href={"/stylist/natsuki"}>
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
            <Link href={"/stylist/nozomi"}>
              <a>
                <li className={styles.stylistImage}>
                  <Image
                    className={styles.stylistImageHover}
                    src={"/media/flyer06.jpg"}
                    objectFit="contain"
                    alt={"Nozomi"}
                    width={240}
                    height={240}
                  />
                </li>
              </a>
            </Link>
            {/* test00の部分はmicrocms側のコンテンツidと一致させる必要がある */}
            <Link href={"/stylist/test00"}>
              <a>
                <li className={styles.stylistImage}>
                  <Image
                    className={styles.stylistImageHover}
                    src={"/media/flyer07.jpg"}
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
                    src={"/media/flyer08.jpg"}
                    objectFit="contain"
                    alt={"Katayama"}
                    width={240}
                    height={240}
                  />
                </li>
              </a>
            </Link>
          </ul>
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
                    src={"/media/slider05.jpg"}
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
                    src={"/media/slider06.jpg"}
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
                    src={"/media/slider09.jpg"}
                    objectFit="contain"
                    alt={"Nozomi"}
                    width={240}
                    height={240}
                  />
                </li>
              </a>
            </Link>
            {/* test00の部分はmicrocms側のコンテンツidと一致させる必要がある */}
            <Link href={"/stylist/test00"}>
              <a>
                <li className={styles.stylistImage}>
                  <Image
                    className={styles.stylistImageHover}
                    src={"/media/slider03.jpg"}
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
                    src={"/media/slider07.jpg"}
                    objectFit="contain"
                    alt={"Katayama"}
                    width={240}
                    height={240}
                  />
                </li>
              </a>
            </Link>
          </ul>
          <ul className={styles.flex}>
            <Link href={"/stylist/john"}>
              <a>
                <li className={styles.stylistImage}>
                  <Image
                    className={styles.stylistImageHover}
                    src={"/media/slider.jpg"}
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
                    src={"/media/slider10.jpg"}
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
                    src={"/media/slider01.jpg"}
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
                    src={"/media/slider11.jpg"}
                    objectFit="contain"
                    alt={"Nozomi"}
                    width={240}
                    height={240}
                  />
                </li>
              </a>
            </Link>
            {/* test00の部分はmicrocms側のコンテンツidと一致させる必要がある */}
            <Link href={"/stylist/test00"}>
              <a>
                <li className={styles.stylistImage}>
                  <Image
                    className={styles.stylistImageHover}
                    src={"/media/yoga00.jpg"}
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
                    src={"/media/slider04.jpg"}
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
