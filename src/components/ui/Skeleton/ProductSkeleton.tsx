import React from 'react';
import { Skeleton, Card } from 'antd';

const ProductSkeleton: React.FC = () => {
  return (
    <Card 
      className="rounded-lg shadow-lg w-56 h-64 flex flex-col justify-between overflow-hidden"
      bodyStyle={{ padding: '12px' }} // Ensure no overflow by keeping padding reasonable
    >
      <div className="relative h-5 w-16 mb-3">
        <Skeleton.Button active={true} className="absolute top-0 left-0 h-full w-full rounded-full" />
      </div>
      
      <div className="flex justify-center mb-3">
        <Skeleton.Image active={true} className="w-24 h-24" />
      </div>

      <div className="flex flex-col space-y-1">
        <Skeleton.Input active={true} className="w-2/3" size="small" />
        <div className="flex justify-between">
          <Skeleton.Input active={true} className="w-1/3" size="small" />
          <Skeleton.Input active={true} className="w-1/5" size="small" />
        </div>
        <Skeleton.Input active={true} className="w-1/2" size="small" />
        <div className="flex justify-between items-center mt-2">
          <Skeleton.Input active={true} className="w-1/3" size="small" />
          <Skeleton.Input active={true} className="w-1/4" size="small" />
        </div>
      </div>
    </Card>
  );
};

export default ProductSkeleton;
