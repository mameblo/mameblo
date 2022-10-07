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
              <Link href={"/stylist/fukuya"}>
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
              <Link href={"/stylist/hre"}>
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
              <Link href={"/stylist/fukuya01"}>
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
                <Link href={"/stylist/hre_logo"}>
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
                <Link href={"/stylist/ticket00"}>
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
                <Link href={"/stylist/ticket01"}>
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
                <Link href={"/stylist/flyer00"}>
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
                <Link href={"/stylist/flyer01"}>
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
                <Link href={"/stylist/flyer02"}>
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
          <Link href={"/stylist"} passHref>
            <a className={styles.nextInner}>
              <span className={styles.nextInnerIn}>他の作品も見る</span>
            </a>
          </Link>
         </div>
            {/* <Link href={"/stylist/flyer03"}>
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
            {/*<Link href={"/stylist/flyer04"}>
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
            <Link href={"/stylist/flyer05"}>
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
            <Link href={"/stylist/slider"}>
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
            <Link href={"/stylist/slider01"}>
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
            <Link href={"/stylist/slider02"}>
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
            <Link href={"/stylist/slider03"}>
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
            {/*<Link href={"/stylist/slider04"}>
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
            <Link href={"/stylist/slider05"}>
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
            <Link href={"/stylist/slider06"}>
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
            <Link href={"/stylist/slider07"}>
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
            <Link href={"/stylist/slider08"}>
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
            <Link href={"/stylist/slider09"}>
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
            {/*<Link href={"/stylist/slider10"}>
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
            <Link href={"/stylist/slider11"}>
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
            </Link>*/}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Staffs;
