import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

import Button from "../../global/Button/Button";
import styles from "./Intro.module.scss";


const images = [
  { id: 1, image: "/team/acc-eg-3.png" },
  { id: 2, image: "/team/acc-eg-4.png" },
  { id: 3, image: "/team/acc-eg-5.png" },
  { id: 4, image: "/team/acc-eg-6.png" },
  { id: 5, image: "/team/acc-eg-7.png" },
  { id: 5, image: "/team/acc-eg-9.png" },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const HeroCarousel = () => {
  return (
    <div className={styles.intro}>
      <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000}>
        {images.map((image) => (
          <div key={image.id}>
            <img
              src={image.image}
              alt="NFT collection"
              style={{ width: "100%", height: "100%", padding: "30px" }}
            />
          </div>
        ))}
      </Carousel>
      <div className={styles._intro_data}>
        <article className={styles._first_intro}>
          <div className={styles._div}>
            <Button>Get Whitelisted</Button>
          </div>
        </article>
        <br />
      </div>
    </div>
  );
};

export default HeroCarousel;
