import { useNavigate } from "react-router-dom";
import { categoryQuery } from "../../../Redux/Features/Query Manage/queryCategory.slice";
import { useAppDispatch } from "../../../Redux/hook";
import { TCategoryWithIcon } from "../../../types/Const/product.const";

const CategoryCard = ({ item }: { item: TCategoryWithIcon }) => {
  const navigate = useNavigate();
  const updateCategoryByHomePage = useAppDispatch();

  const handleFilterCategory = (category: { category: string }) => {
    console.log(category);
    
    updateCategoryByHomePage(categoryQuery(category));
    navigate("/all-products");
  };

  return (
    <div
      onClick={() => handleFilterCategory(item?.name as never)}
      className="bg-white rounded-xl shadow-2xl cursor-pointer"
    >
      {/* icon div  */}
      <div className="flex justify-center items-center text-4xl p-5 hover:text-secondary">
        <item.icon />
      </div>

      {/* links  */}
      <p className="text-center pb-3">{item?.name}</p>
    </div>
  );
};

export default CategoryCard;
