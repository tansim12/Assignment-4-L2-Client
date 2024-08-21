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
//   https://i.ibb.co/SnjRV9n/1.webp
// https://i.ibb.co/qWJSppK/2.webp
// https://i.ibb.co/vc7mQ8s/3.jpg
// https://i.ibb.co/7KrYLQJ/3.webp
// https://i.ibb.co/mG2tw39/4.webp

  const SLIDES: TSlides[] = [
    { img: "https://i.ibb.co/SnjRV9n/1.webp", text: "sjfgdjkgkdfjg" },
    { img: "https://i.ibb.co/qWJSppK/2.webp", text: "sjfgdjkgkdfjg" },
    { img: "https://i.ibb.co/vc7mQ8s/3.jpg", text: "sjfgdjkgkdfjg" },
    { img: "https://i.ibb.co/7KrYLQJ/3.webp", text: "sjfgdjkgkdfjg" },
    { img: "https://i.ibb.co/mG2tw39/4.webp", text: "sjfgdjkgkdfjg" },
  ];
  return (
    <div>
      
      <div className="mt-5 md:mt-20">
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
