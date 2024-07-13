import { IButton } from "../../types/button.type";

const Button = ({ name }: IButton) => {
  return (
    <div
      className="flex justify-center items-center mb-7 
    "
    >
      <button className="text-xl w-full py-1 rounded-lg font-bold bg-white border-2 border-primary text-primary  overflow-hidden relative z-10 group hover:text-black duration-700">
        {name}
        <span className="bg-green-900 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-50 size-32 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span>
        <span className="bg-sky-800 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-100 size-28 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span>
        <span className="bg-sky-600 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-200 size-24 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span>
        <span className="bg-green-500 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-300 size-20 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span>
        <span className="bg-sky-500 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-[400ms] size-16 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span>
      </button>
    </div>
  );
};

export default Button;
