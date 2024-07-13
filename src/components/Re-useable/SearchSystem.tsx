import { Modal } from "antd";
import { FormEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchSystem = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    console.log(searchValue);
  };
  return (
    <>
      <Modal
        title="Search Products"
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
      >
        <div>
          <form onSubmit={handleSubmit} className="flex">
            <input
              type="text"
              placeholder="I'm shopping for..."
              className="ml-4 px-4 py-2 border rounded w-64  "
              name="search"
            />
            <button
              type="submit"
              className="ml-2 bg-primary text-white px-4 py-2 rounded"
            >
              {/* large  */}
              <FaSearch className=" text-2xl" />
            </button>
          </form>
        </div>
      </Modal>
      <div>
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            placeholder="I'm shopping for..."
            className="ml-4 px-4 py-2 border rounded w-64 hidden md:block "
            name="search"
          />
          <button
            type="submit"
            className="ml-2 bg-primary text-white px-4 py-2 rounded"
          >
            {/* large  */}
            <FaSearch className="hidden md:block text-2xl" />
            {/* small  */}
            <FaSearch onClick={showModal} className="block md:hidden text-xl" />
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchSystem;
