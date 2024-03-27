import { IoIosArrowDropdown } from "react-icons/io";
import { useLoaderData } from "react-router-dom";
import { BsPeople } from "react-icons/bs";
import { MdOutlineContactPage } from "react-icons/md";
import { FcCalendar } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStoredBook } from "../utility/localStorage";

const ListedBooks = () => {
  const booklist = useLoaderData();

  const [boAA, setBoAA] = useState([]);

  const [sort, setSort] = useState([])

  

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
      setsort(bookA)
      // console.log(bookA, booklist, storedBookIds);
    }
  }, [booklist]);

  return (
    <>
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
            <li>
              <a>All</a>
            </li>
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of pages</a>
            </li>
            <li>
              <a>Year of Publishing</a>
            </li>
          </ul>
        </details>
      </div>

      <div className="flex max-w-6xl mx-auto items-center justify-center sm:justify-start  overflow-x-auto overflow-y-hidden ">
        <a
          href="#"
          className="flex items-center px-4 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600"
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
          <span>Architecto</span>
        </a>
        <a
          href="#"
          className="flex items-center px-4 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-900"
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
          <span>Corrupti</span>
        </a>
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
    </>
  );
};

export default ListedBooks;
