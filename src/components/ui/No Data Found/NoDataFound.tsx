
import noDataImage from "../../../assets/no-data1.png";

const NoDataFound = () => {
  return (
    <div className="flex justify-center items-center min-h-[50vh] w-full">
      <img src={noDataImage} alt="" />
    </div>
  );
};

export default NoDataFound;
