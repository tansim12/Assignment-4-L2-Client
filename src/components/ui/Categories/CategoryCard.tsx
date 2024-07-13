const CategoryCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-2xl">
      {/* img div  */}
      <div className="flex justify-center items-center">
      <img className="p-4 size-28" src="https://i.ibb.co/JkX6YGK/pngwing-com-26.png" alt="" />
      </div>

      {/* links  */}
      <p className="text-center pb-3">Category Name</p>
    </div>
  );
};

export default CategoryCard;
