import Title from "../../Re-useable/Title";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <div>
      {/* title div  */}
      <div>
        <Title
          mainText="All Categories"
          additionalText="want to introduce to the market. add a view more button"
        />
      </div>

      {/* category Card */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
};

export default Categories;
