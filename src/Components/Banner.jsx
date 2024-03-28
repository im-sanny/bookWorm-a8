import { Link, useLoaderData } from "react-router-dom";
import BookCard from "./BookCard";

const Banner = () => {
  const books = useLoaderData();

  return (
    <>
      <div className="bg-[#1313130D] max-w-6xl mx-auto rounded-lg">
        <div className="container lg:grid grid-cols-12 mx-auto lg:p-10 ">
          <div className="bg-no-repeat flex justify-center items-center lg:p-0 p-10 bg-cover lg:col-span-3">
            <img
              className="h-80 flex justify-center items-center lg:h-full"
              src={books[7].image}
              alt=""
            />
          </div>
          <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
            <div className="flex justify-start"></div>

            <div className="lg:p-6 px-3 space-y-2 lg:col-span-5 flex flex-col justify-center lg:items-start items-center lg:ml-10">
              <h3 className="lg:text-3xl text-4xl font-semibold lg:font-bold mb-3">
                Revitalize your book collection with captivating reads that
                inspire, engage, and transport your imagination.{" "}
              </h3>
              <Link
                to="/listedBooks"
                className="px-5 py-2.5 font-medium border border-yellow-400 bg-blue-100 hover:bg-green-100 hover:text-blue-600 text-blue-500 text-sm rounded-full"
              >
                View The List
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-6xl p-3 lg:p-0 mx-auto space-y-6 sm:space-y-12">
        <div className="my-10 text-4xl font-bold flex justify-center">
          Books
        </div>

        <div className="grid justify-center grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <BookCard key={book.bookId} book={book}></BookCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Banner;
