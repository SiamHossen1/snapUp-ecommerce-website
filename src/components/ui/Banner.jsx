import { useState, useEffect } from "react";
import img1 from "../../assets/images/banner_img_1.jpg";
import img2 from "../../assets/images/banner_img_2.jpg";
import img3 from "../../assets/images/banner_img_3.jpg";
const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3];

  // Automatically change the slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider px-20">
      <img
        className=" h-52 w-full object-fill my-8"
        src={images[currentIndex]}
        alt="Slider Image"
      />
    </div>
  );
};

export default Banner;
