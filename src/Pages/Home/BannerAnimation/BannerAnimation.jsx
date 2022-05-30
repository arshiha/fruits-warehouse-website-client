import { useLottie } from "lottie-react";
import groovyWalkAnimation from "../../../assets/fruits/fruit1.json";

const BannerAnimation = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default BannerAnimation;
