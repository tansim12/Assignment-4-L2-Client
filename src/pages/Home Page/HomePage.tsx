import BestSelling from "../../components/ui/Best Selling/BestSelling";
import Categories from "../../components/ui/Categories/Categories";
import Faq from "../../components/ui/Faq/Faq";
import FeaturedProduct from "../../components/ui/Featured Product/FeaturedProduct";

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
      
      <div>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
      {/* Best Selling  */}
      <div>
        <BestSelling />
      </div>
      {/* categories  */}
      <div>
        <Categories />
      </div>
      {/* featured products  */}
      <div>
        <FeaturedProduct />
      </div>
      {/* Faq  */}
      <div>
        <Faq />
      </div>
    </div>
  );
};

export default HomePage;
