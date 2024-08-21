import { TCategoryWithIcon } from "../../../types/Const/product.const";

const CategoryCard = ({item}:{item:TCategoryWithIcon}) => {
  return (
    <div className="bg-white rounded-xl shadow-2xl cursor-pointer">
      {/* img div  */}
      <div className="flex justify-center items-center text-4xl p-5 hover:text-secondary">
      <item.icon />
      </div>

      {/* links  */}
      <p className="text-center pb-3">{item?.name}</p>
    </div>
  );
};

export default CategoryCard;
