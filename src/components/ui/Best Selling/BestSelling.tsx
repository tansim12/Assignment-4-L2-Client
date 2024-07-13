import Title from "../../Re-useable/Title";
import Card from "../Product Card/Card";
import TitleTopAnimation from "./TitleTopAnimation";


const BestSelling = () => {
  return (
    <div className="my-10">
      {/* title section  */}
      <div>
        <Title
          mainText="Best Selling"
         
        >
          <TitleTopAnimation />{" "}
        </Title>
      </div>

      {/* card div  */}
      <div>
        <Card />
      </div>
    </div>
  );
};

export default BestSelling;
