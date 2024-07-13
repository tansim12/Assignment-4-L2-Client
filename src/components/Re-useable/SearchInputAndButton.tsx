import { FaSearch } from "react-icons/fa";

const SearchInputAndButton = ({ showModal, isSmallSize }) => {
    console.log(isSmallSize);
    
  return (
    <div className="flex">
      <input
        type="text"
        placeholder="I'm shopping for..."
        className="ml-4 px-4 py-2 border rounded w-64 hidden md:block "
      />
      <button className="ml-2 bg-primary text-white px-4 py-2 rounded">
        {/* large  */}
        <FaSearch className="hidden md:block text-2xl" />
        {/* small  */}
        {isSmallSize === false && (
          <FaSearch onClick={showModal} className="block md:hidden text-xl" />
        )}
      </button>
    </div>
  );
};

export default SearchInputAndButton;
