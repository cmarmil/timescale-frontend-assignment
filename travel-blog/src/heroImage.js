import heroBackground from "./images/hero-background.jpg";

function HeroImage() {
  return (
    <img
      className="heroImage"
      src={heroBackground}
      alt="landscape with mountains and lake"
    />
  );
}

export default HeroImage;
