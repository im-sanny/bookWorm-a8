import { useLoaderData, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { getStoredBook, saveBook } from "../utility/localStorage";
import { useState } from "react";

const ShowDetails = () => {
  const bookDetails = useLoaderData();
  const { bookId } = useParams();
  const idInt = parseInt(bookId);
  const book = bookDetails.find((book) => book.bookId == idInt);

  const [readBooks, setReadBooks] = useState(getStoredBook() || []);
  const [wishList, setWishList] = useState(getStoredBook() || []);

  const handleRead = () => {
    if (!readBooks.includes(idInt)) {
      saveBook(idInt);
      setReadBooks([...readBooks, idInt]);
      toast.success("Successfully added to read");
    } else {
      toast.error("This book is already added to read");
    }
  };

  const handleWish = () => {
    if (!wishList.includes(idInt)) {
      saveBook(idInt);
      setWishList([...wishList, idInt]);
      toast.success("Added to wish list");
    } else {
      toast.error("This book is already added to wish list");
    }
  };

  return (
    <>
      <div>
        <div className="container grid grid-cols-12 max-w-6xl mx-auto">
          <div className="flex flex-col justify-center col-span-12 bg-[#1313130D] rounded-lg lg:col-span-6 p-10 h-[500px]">
            <img
              className="h-full w-fit mx-auto flex justify-center items-center"
              src={book.image}
              alt=""
            />
          </div>

          <div className="flex flex-col col-span-12 p-6 lg:col-span-6 lg:p-10 divide-gray-700">
            <div className="pt-6 pb-4 space-y-2">
              <h1 className="text-3xl font-bold">{book.bookName}</h1>
              <p className="">By: {book.author}</p>
              <div className="divider"></div>
              <p>{book.category}</p>
              <div className="divider"></div>
              <div>
                <span className="font-bold">Review:</span>{" "}
                <span>{book.review}</span>
              </div>
              <div className="flex gap-2 my-5">
                <p className="px-2 py-1 text-xs rounded-full font-bold text-[#23BE0A] bg-[#23BE0A0D]">
                  {book.tags[0]}
                </p>
                <p className="px-2 py-1 text-xs rounded-full font-bold text-[#23BE0A] bg-[#23BE0A0D]">
                  {book.tags[1]}
                </p>
              </div>

              <div className="flex ">
                <span>
                  Number of Pages:{" "}
                  <span className="font-bold"> {book.totalPages}</span>
                </span>
              </div>

              <div className="flex ">
                <p>
                  Publisher:{" "}
                  <span className="font-bold"> {book.publisher}</span>
                </p>
              </div>

              <div className="flex ">
                <p>
                  Year of Publishing:{" "}
                  <span className="font-bold">{book.yearOfPublishing}</span>
                </p>
              </div>

              <div className="flex ">
                <p>
                  Rating: <span className="font-bold">{book.rating}</span>
                </p>
              </div>

              <div className="flex gap-3">
                <button onClick={handleRead} className="px-5 btn-sm flex justify-center items-center py-2 w-1/5 border border-yellow-300 bg-blue-100 hover:bg-green-200 hover:text-blue-600 text-blue-500 text-sm rounded-full font-bold">
                  Read
                </button>
                <button onClick={handleWish} className="px-5 btn-sm flex justify-center items-center w-1/5 py-2 border border-yellow-300 bg-blue-100 hover:bg-green-200 hover:text-blue-600 text-blue-500 text-sm rounded-full font-bold">
                  Wishlist
                </button>
              </div>
            </div>
            <Toaster />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowDetails;
