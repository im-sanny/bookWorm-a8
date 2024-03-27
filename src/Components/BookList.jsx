import { useLoaderData, useParams } from "react-router-dom";

const BookList = () => {
  const booklist = useLoaderData();
  // console.log(booklist);

  const { bookId } = useParams();
  // console.log(bookId);
  const book = booklist.find((book) => book.bookId == bookId);

  // console.log(book);
  const {
    bookName,
    author,
    image,
    review,
    rating,
    totalPages,
    publisher,
    yearOfPublishing,
    category,
    tags
  } = book;
  return (
    <div>
      <div className="">
        <div className="container grid grid-cols-12 max-w-6xl mx-auto">
          <div className="flex flex-col justify-center col-span-12 bg-[#1313130D] rounded-lg lg:col-span-6 p-20 h-[500px]">
            <img
              className="h-full w-fit flex justify-center items-center
          "
              src={image}
              alt=""
            />
          </div>

          <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-700">
            <div className="pt-6 pb-4 space-y-2">
              <h1 className="text-3xl font-bold">{bookName}</h1>
              <p className="">By: {author}</p>
              <div className="divider"></div>
              <p>{category}</p>
              <div className="divider"></div>
              <div>
                <span className="font-bold">Review:</span>{" "}
                <span>{review}</span>
              </div>
              <div className="flex gap-2 my-5">
                <p className="px-2 py-1 text-xs rounded-full font-bold text-[#23BE0A] bg-[#23BE0A0D]">
                  {tags[0]}
                </p>
                <p className="px-2 py-1 text-xs rounded-full font-bold text-[#23BE0A] bg-[#23BE0A0D]">
                  {tags[1]}
                </p>
              </div>

              <div className="flex ">
                <span>
                  Number of Pages:{" "}
                  <span className="font-bold"> {totalPages}</span>
                </span>
              </div>

              <div className="flex ">
                <p>
                  Publisher:{" "}
                  <span className="font-bold"> {publisher}</span>
                </p>
              </div>

              <div className="flex ">
                <p>
                  Year of Publishing:{" "}
                  <span className="font-bold">{yearOfPublishing}</span>
                </p>
              </div>

              <div className="flex ">
                <p>
                  Rating: <span className="font-bold">{rating}</span>
                </p>
              </div>

              <div className="flex gap-5">
                <button className="btn btn-primary w-20">Read</button>
                <button className="btn btn-primary w-20">Wishlist</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookList;
