/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const BookCard = ({ book }) => {
  const { bookName, author, image, tags, rating, category, bookId } = book;
  
  return (
    <Link
      to={`listedBooks/${bookId}`}
      className="max-w-6xl mx-auto group transition border-2 hover:scale-105  hover:border-primary border-opacity-35 rounded-lg  p-5 w-[350px]"
    >
      <div className="bg-base-200 rounded-lg flex justify-center">
        <img role="presentation" className="  rounded h-44 p-5 " src={image} />
      </div>
      <div className="flex gap-2 my-5">
        <p className="px-2 py-1 text-xs rounded-full font-bold text-[#23BE0A] bg-[#23BE0A0D]">
          {tags[0]}
        </p>
        <p className="px-2 py-1 text-xs rounded-full font-bold text-[#23BE0A] bg-[#23BE0A0D]">
          {tags[1]}
        </p>
      </div>
      <div className=" space-y-2">
        <h3 className="text-2xl font-semibold ">{bookName}</h3>
        <h3>By: {author}</h3>
        <div className="border border-dashed"></div>
        <div className="flex justify-between">
          <p>{category}</p>
          <p className="flex justify-center items-center">
            {rating} <FaStar size={20} className="text-yellow-300 ml-1" />
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
