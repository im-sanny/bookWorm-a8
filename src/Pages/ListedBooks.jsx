import { useLoaderData, useParams } from "react-router-dom";
import { IoIosArrowDropdown } from "react-icons/io";
import ListCard from "../Components/ListCard";

const ListedBooks = () => {
  const booklist = useLoaderData([]);
  const { id } = useParams();
  console.log(booklist, id);
  const book = booklist.find((boo) => boo.id == id);
  console.log(book);
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
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
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
        {booklist.map((list) => (
          <ListCard key={list.id} list={list}></ListCard>
        ))}
      </div>
    </>
  );
};

export default ListedBooks;
