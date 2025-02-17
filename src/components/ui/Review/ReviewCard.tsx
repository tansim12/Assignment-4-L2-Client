import React from "react";

type ReviewCardProps = {
  title: string;
  content: string;
  author: string;
  imageUrl: string;
};

const ReviewCard: React.FC<ReviewCardProps> = ({
  title,
  content,
  author,
  imageUrl,
}) => {
  return (
    <div className="gradient-border rounded-lg  h-80 flex flex-col justify-between">
      <div className="flex justify-center items-center">
        <img
          src={imageUrl}
          alt={title}
          className="size-24 object-cover border-black border shadow-xl p-3 mb-4 rounded-full"
        />
      </div>
      <div>
        <h3 className="text-xl mb-2 font-bold">{title}</h3>
        <p className="text-gray-600 mb-4">{content}</p>
      </div>
      <span className="text-sm text-gray-500">- {author}</span>
    </div>
  );
};

export default ReviewCard;
