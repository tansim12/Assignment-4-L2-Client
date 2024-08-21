import { allCategoryArrayWithIcon } from "../../../types/Const/product.const";
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
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-4 mt-10 mb-16">
        {allCategoryArrayWithIcon &&
          allCategoryArrayWithIcon?.map((item, i) => (
            <div key={i}>
              <CategoryCard item={item} />
            </div>
          ))}
        
      </div>
    </div>
  );
};

export default Categories;
