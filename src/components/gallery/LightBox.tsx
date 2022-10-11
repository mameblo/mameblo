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
  const images3 = [
    "../styles/illust01_2.jpg",
    "../styles/illust01_2.jpg",
    "../styles/illust01_2.jpg",
  ];
  const images2 = [
    "../styles/illust01_2.jpg",
    "../styles/illust01_2.jpg",
    "../styles/illust01_2.jpg",
  ];
  const images1 = [
    "../styles/illust01_2.jpg",
    "../styles/illust01_2.jpg",
    "../styles/illust01_2.jpg",
  ];
  const title = ["Azura", "Ingun Black-Briar", "The Blue Palace", "Cicero"];
  
  const [photoIndex, setIndex] = useState(0);
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
       <div>
      <main className="">
        <h3>lightbox-reactのDEMO</h3>
        <div className={styles.lightBoxFlex}>
          {images3.map((image, index) => (
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
          ))}
        </div>
        <div className={styles.lightBoxFlex}>
          {images2.map((image, index) => (
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
          ))}
        </div>
        <div className={styles.lightBoxFlex}>
          {images1.map((image, index) => (
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
          ))}
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
