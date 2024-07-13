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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default BestSelling;
