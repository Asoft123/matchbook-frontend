import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import styled from "styled-components";
import "@mantine/carousel/styles.css";

import {
  // ImageContainer1,
  ImageContainer2,
  ImageContainer3,
  ImageContainer4,
  // ImageContainer5,
  ImageContainer6,
  // ImageContainer7,
} from ".";
// import Hero1 from '../Hero1';
// import Hero2 from '../Hero2';

export const SliderImageContainer1 = styled.div`
  /* flex: 1; */
  width: 60%;
  height: 100vh;
  background: red;
`;
function LoginCarousel() {
  // const autoplay = useRef(Autoplay({ delay: 5000 }));
  return (
    <SliderImageContainer1>
      <Carousel withIndicators height={200}>
        <Carousel.Slide>1</Carousel.Slide>
        <Carousel.Slide>2</Carousel.Slide>
        <Carousel.Slide>3</Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
    </SliderImageContainer1>
  );
}

export default LoginCarousel;
