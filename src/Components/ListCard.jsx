/* eslint-disable react/prop-types */
import { BsPeople } from "react-icons/bs";
import { MdOutlineContactPage } from "react-icons/md";
import { FcCalendar } from "react-icons/fc";
import { Link } from "react-router-dom";

const ListCard = ({ boo }) => {
  const {
    bookName,
    author,
    image,
    tags,
    rating,
    category,
    totalPages,
    publisher,
    yearOfPublishing,
  } = boo;

  return (
    <>
      <div className="card lg:max-w-6xl lg:h-64 mx-auto my-5 border-2 p-5 lg:card-side bg-base-100 shadow-xl">
        <div className="p-5 w-1/5 flex justify-center items-center bg-base-300 rounded-xl">
          <img className="h-full" src={image} alt="Album" />
        </div>
        <div className="w-3/5 ml-10">
          <h1 className="text-2xl lg:text-3xl font-bold ">{bookName}</h1>
          <p className="my-2">By: {author}</p>

          <div className="flex gap-2 my-2">
            {tags.map((tag, index) => (
              <p
                key={index}
                className="px-2 py-1 text-xs rounded-full font-bold text-[#23BE0A] bg-[#23BE0A0D]"
              >
                #{tag}
              </p>
            ))}
            <p className="mr-2 flex items-center"> <FcCalendar className="mr-1" size={20}/>
              Year of Publishing:{" "}
              <p className="font-bold ml-1"> {yearOfPublishing}</p>
            </p>
          </div>
          <div className="flex items-center "></div>
          <div className="flex gap-5">
            <p className="mr-2 flex gap-2 items-center">
              <BsPeople /> Publisher:{" "}
              <span className="font-bold">{publisher}</span>
            </p>
            <p className="mr-2 flex gap-2 items-center">
              <MdOutlineContactPage /> Number of Pages:{" "}
              <span className="font-bold">{totalPages}</span>
            </p>
          </div>

          <div className="divider "></div>
          <div className="flex gap-5">
            <Link
              to={""}
              button
              className="btn flex justify-between bg-[#619feb71] btn-sm rounded-full w-1/3 lg:w-1/5"
            >
              Category: {category}
            </Link>
            <Link
              to={""}
              button
              className="btn btn-sm rounded-full bg-[#ffad33e1] w-1/3 lg:w-1/5"
            >
              Rating: {rating}
            </Link>
            <Link
              to={""}
              button
              className="btn btn-sm rounded-full w-1/3 bg-[#23BE0A] text-white lg:w-1/5"
            >
              Wishlist
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListCard;
