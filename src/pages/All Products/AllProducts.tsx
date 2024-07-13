import { FaFilter } from "react-icons/fa";
import SearchSystem from "../../components/Re-useable/SearchSystem";

const AllProducts = () => {
  return (
    <div>
      {/* search bar and filter handle  */}
      <div className="border border-black h-16 flex justify-between items-center px-3 rounded-lg ">
        <div className="flex justify-center items-center gap-3">
          <FaFilter /> filter
        </div>
        <div>
          <SearchSystem />
        </div>
        <div>sorting</div>
      </div>
    </div>
  );
};

export default AllProducts;
