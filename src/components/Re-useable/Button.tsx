import { IButton } from "../../types/button.type";

const Button = ({ name }: IButton) => {
  return (
    <div className="flex justify-center items-center mb-3">
      <button className="group relative z-10 h-10 w-full overflow-hidden bg-white text-xl text-black  font-bold border-secondary border-2 rounded-md">
        <span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-white transition-transform duration-700 group-hover:scale-x-50 group-hover:duration-300"></span>
        <span className="absolute -inset-[80px] origin-left rotate-12 scale-x-0 transform bg-sky-700 transition-transform duration-500 group-hover:scale-x-100 group-hover:duration-700"></span>
        <span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-sky-900 transition-transform duration-300 group-hover:scale-x-50 group-hover:duration-500"></span>
        <span className="absolute z-10 text-center text-white opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-700">
          {name}
        </span>
        {name}
      </button>
    </div>
  );
};

export default Button;
