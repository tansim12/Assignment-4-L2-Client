import Lottie from "lottie-react";
import faq from "../../../assets/Animation/faq.json";
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import Title from "../../Re-useable/Title";
const Faq = () => {




const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
];

const onChange = (key: string | string[]) => {
    console.log(key);
  };
  return (
    <div className="my-10">
        {/* title div  */}
        <div className="my-10">
            <Title  mainText="FAQ" additionalText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. regfg"/>
        </div>
      {/* main div  */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5 ">
        {/* animation div  */}
        <div>
        <Lottie
        animationData={faq}
        loop={true}
        autoplay={true}
        className="w-[70%] "
      ></Lottie>
        </div>

        {/* faq div  */}
        <div className="bg-white rounded-3xl flex justify-center items-center shadow-2xl">
        <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

export default Faq;
