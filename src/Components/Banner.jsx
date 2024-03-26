import { Link, useLoaderData } from "react-router-dom";
import BookCard from "./BookCard";

const Banner = () => {
  const books = useLoaderData();

  return (
    <>
      <div className="bg-[#1313130D] max-w-6xl mx-auto rounded-lg">
        <div className="container grid grid-cols-12 mx-auto lg:p-10 ">
          <div className="bg-no-repeat bg-cover col-span-full lg:col-span-3">
            <img src={books[7].image} alt="" />
          </div>
          <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
            <div className="flex justify-start"></div>

            <div className="p-6 space-y-2 lg:col-span-5 flex flex-col justify-center items-start ml-10">
              <h3 className="text-2xl font-semibold sm:text-4xl mb-3">
                Revitalize your book collection with captivating reads that
                inspire, engage, and transport your imagination.{" "}
              </h3>
              <Link to='/' className="btn bg-[#59C6D2] font-bold">
                View The List
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <div className="my-10 text-4xl font-bold flex justify-center">
          Books
        </div>

        <div className="grid grid-cols-3 gap-5">
          {books.map((book) => (
            <BookCard key={book.bookId} book={book}></BookCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Banner;
