"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings} className="max-w-[400px]">
        <Image src="/images/1.jpg" alt="image1" width={400} height={400} />
        <Image src="/images/2.jpg" alt="image2" width={400} height={400} />
        <Image src="/images/3.jpg" alt="image3" width={400} height={400} />
        <Image src="/images/4.jpg" alt="image4" width={400} height={400} />
    </Slider>
  );
}
