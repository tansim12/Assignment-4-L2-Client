import { Modal } from "antd";
import React, { FormEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { LeftSideFilterProps } from "../../types/quearyFilter.type";

const SearchSystem: React.FC<LeftSideFilterProps> = ({ setQueryObj }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const searchInput = form.elements.namedItem('search') as HTMLInputElement;
    const searchTerm = searchInput?.value ?? ''; // Default to an empty string if searchInput is null or undefined
  
    if (setQueryObj) {
      setQueryObj((prev) => ({ ...prev, searchTerm }));
    } else {
      console.warn("setQueryObj is not defined");
    }
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
