import BestSelling from "../../components/ui/Best Selling/BestSelling";
import Navbar from "../../components/ui/Navbar/Navbar";
import EmblaCarousel from "../../components/ui/Slider/EmblaCarousel";

export interface TSlides {
  img: string;
  text: string;
}
const HomePage = () => {
  const OPTIONS = { loop: true };

  const SLIDES: TSlides[] = [
    { img: "https://i.ibb.co/xjW4tkM/Silver.png", text: "sjfgdjkgkdfjg" },
    { img: "https://i.ibb.co/dKYNn2C/Platinum-1.png", text: "sjfgdjkgkdfjg" },
    { img: "https://i.ibb.co/2M8cKFy/Blue.png", text: "sjfgdjkgkdfjg" },
    { img: "https://i.ibb.co/pwQ9jtn/Gold.png", text: "sjfgdjkgkdfjg" },
  ];
  return (
    <div>
      <Navbar />
      <div>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
      {/* Best Selling  */}
      <div>
        <BestSelling />
      </div>
    </div>
  );
};

export default HomePage;
