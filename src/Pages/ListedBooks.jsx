import { IoIosArrowDropdown } from "react-icons/io";
import { Outlet, useLoaderData } from "react-router-dom";
import { BsPeople } from "react-icons/bs";
import { MdOutlineContactPage } from "react-icons/md";
import { FcCalendar } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStoredBook } from "../utility/localStorage";

const ListedBooks = () => {
  const booklist = useLoaderData();

  const [boAA, setBoAA] = useState([]);
  const [sort, setSort] = useState([]);

  const [tabIndex, setTabIndex] = useState(0);

  const handleSortFilter = (filter) => {
    if (filter === "all") {
      setSort(boAA);
    } else if (filter === "rating") {
      const sortedByRating = [...boAA].sort((a, b) => b.rating - a.rating);
      setSort(sortedByRating);
    } else if (filter === "yearOfPublishing") {
      const publishedYear = [...boAA].sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      setSort(publishedYear);
    }
  };

  useEffect(() => {
    const storedBookIds = getStoredBook();
    if (booklist.length > 0) {
      // const bookA = booklist.filter(book => storedBookIds.includes(book.bookId));

      const bookA = [];
      for (const bookId of storedBookIds) {
        const book = booklist.find((book) => book.bookId === bookId);
        if (book) {
          bookA.push(book);
        }
      }
      setBoAA(bookA);
      setSort(boAA);
      // console.log(bookA, booklist, storedBookIds);
    }
  }, [booklist]);

  return (
    <div className="min-h-[calc(100vh-202px)]">
      <div className="collapse bg-base-200 max-w-6xl mx-auto my-5">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title text-3xl flex justify-center items-center font-bold">
          Books
        </div>
      </div>
      <div className="max-w-6xl mb-28 mx-auto flex justify-center">
        <details className="dropdown">
          <summary className="m-1 btn bg-green-400 text-2xl text-white font-bold">
            Sort <IoIosArrowDropdown size={30} />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleSortFilter("all")}>
              <a>All</a>
            </li>
            <li onClick={() => handleSortFilter("rating")}>
              <a>Rating</a>
            </li>
            <li onClick={() => handleSortFilter("yearOfPublishing")}>
              <a>Year of Publishing</a>
            </li>
          </ul>
        </details>
      </div>
      <div>
        <div className="flex max-w-6xl mx-auto items-center justify-center sm:justify-start  overflow-x-auto overflow-y-hidden ">
          <div className="flex items-center overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap ">
            <Link
              to={""}
              onClick={() => setTabIndex(0)}
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                tabIndex === 0 ? "border border-b-0" : "border-b"
              }  rounded-t-lg border-gray-400 `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Read Books</span>
            </Link>
            <Link
              to={"wishlist"}
              onClick={() => setTabIndex(1)}
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                tabIndex === 1 ? "border border-b-0" : "border-b"
              }  rounded-t-lg border-gray-400 `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <span>Wishlist Books</span>
            </Link>
          </div>
        </div>
        <Outlet></Outlet>
      </div>

      <div>
        {sort.map((book) => (
          <div key={book.bookId}>
            <div className="card lg:max-w-6xl lg:h-64 mx-auto my-5 border-2 p-5 lg:card-side bg-base-100 shadow-xl">
              <div className="p-5 w-1/5 flex justify-center items-center bg-base-300 rounded-xl">
                <img className="h-full" src={book.image} alt="Album" />
              </div>
              <div className="w-3/5 ml-10">
                <h1 className="text-2xl lg:text-3xl font-bold ">
                  {book.bookName}
                </h1>
                <p className="my-2">By: {book.author}</p>

                <div className="flex gap-2 my-2">
                  {book.tags.map((tag, index) => (
                    <p
                      key={index}
                      className="px-2 py-1 text-xs rounded-full font-bold text-[#23BE0A] bg-[#23BE0A0D]"
                    >
                      #{tag}
                    </p>
                  ))}
                  <p className="mr-2 flex items-center">
                    {" "}
                    <FcCalendar className="mr-1" size={20} />
                    Year of Publishing:{" "}
                    <p className="font-bold ml-1"> {book.yearOfPublishing}</p>
                  </p>
                </div>
                <div className="flex items-center "></div>
                <div className="flex gap-5">
                  <p className="mr-2 flex gap-2 items-center">
                    <BsPeople /> Publisher:{" "}
                    <span className="font-bold">{book.publisher}</span>
                  </p>
                  <p className="mr-2 flex gap-2 items-center">
                    <MdOutlineContactPage /> Number of Pages:{" "}
                    <span className="font-bold">{book.totalPages}</span>
                  </p>
                </div>

                <div className="divider "></div>
                <div className="flex gap-5">
                  <Link
                    to={""}
                    button
                    className="btn flex justify-between bg-[#619feb71] btn-sm rounded-full w-1/3 lg:w-1/5"
                  >
                    Category: {book.category}
                  </Link>
                  <Link
                    to={""}
                    className="btn btn-sm rounded-full bg-[#ffad33e1] w-1/3 lg:w-1/5"
                  >
                    Rating: {book.rating}
                  </Link>
                  <Link
                    to={""}
                    className="btn btn-sm rounded-full w-1/3 bg-[#23BE0A] text-white lg:w-1/5"
                  >
                    Wishlist
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListedBooks;
