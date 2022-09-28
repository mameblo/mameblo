import Link from "next/link";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import styles from "../../styles/Layouts/Carousel.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TopCarousel = () => {
  const images: string[] = [
    "/media/topimg.jpg",
    "/media/topimg01.jpg",
    "/media/topimg02.jpg",
  ];
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={4000}
        showArrows={true}
        showThumbs={false}
        statusFormatter={() => ``}
      >
        {images.map((url, index) => (
          <div key={index}>
            <Image
              src={url}
              height={1250}
              width={2000}
              alt={"Topスライダーです"}
            />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default TopCarousel;
