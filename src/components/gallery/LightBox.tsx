import react from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Gallery/Gallery.module.scss";
import NamiStyles from "./NamiStyles";
import YukaStyles from "./YukaStyles";
import MaiStyles from "./MaiStyles";
import React, { useState } from "react";
import Lightbox from "lightbox-react";
import "lightbox-react/style.css";

export default function LightBox() {

  const images1 = [
    "../styles/illust07_1.jpg",
    "../styles/illust07-2.jpg",
    "../styles/illust07-3.jpg",
    "../styles/illust01_1.jpg",
    "../styles/illust01_4.jpg",
    "../styles/illust01.jpg",
    "../styles/illust034.jpg",
    "../styles/illust03_4.jpg",
    "../styles/illust03_5.jpg",
  ];
  const title = ["スケートで走るおんなのこver.1", "スケートで走るおんなのこver.2", "スケートで走るおんなのこver.3", "ねむたいちゃんver.1","ねむたいちゃんver.2","ねむたいちゃんver.3","みんな違ってみんないい。ver.1","みんな違ってみんないい。ver.2","みんな違ってみんないい。ver.3"];
  
  const [photoIndex, setIndex] = useState(0);
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      <div>
      <main className="">
      <div className={styles.lightBoxFlex}>
        <div className={styles.stylistArea}>
        <div>
          <h2 className={styles.mainTitle}>illust</h2>
          <p className={styles.mainSubTitle}>ゆるかわイラスト集</p>
        </div>
          <div className={styles.illustColumn}>
            {images1.map((image, index) => (
              <div className={styles.illustSingle}>
              <img
                src={`/img/${image}`}
                alt={image}
                width="200px"
                onClick={() => {
                  setisOpen(true), setIndex(index);
                }}
                key={index}
                className=""
              />
              </div>
            ))}
          </div>
          <div className={styles.next}>
                  <Link href={"https://instagram.com/_mameko.me_?igshid=YmMyMTA2M2Y="}>
                    <a className={styles.nextInner}>
                      <span className={styles.nextInnerIn}>他のイラストはこちら</span>
                    </a>
                  </Link>
                </div>
          </div>
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={`/img/${images1[photoIndex]}`}
            nextSrc={images1[(photoIndex + 1) % images1.length]}
            prevSrc={images1[(photoIndex + images1.length - 1) % images1.length]}
            onCloseRequest={() => setisOpen(false)}
            onMovePrevRequest={() =>
              setIndex((photoIndex + images1.length - 1) % images1.length)
            }
            onMoveNextRequest={() => setIndex((photoIndex + 1) % images1.length)}
            imageTitle={title[photoIndex]}
            imageCaption={title[photoIndex]}
           />
        )}
      </main>
    </div>
    </>
  );
};
