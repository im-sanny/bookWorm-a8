import { useEffect, useState } from "react";
import { getStoredBook } from "../utility/localStorage";

const ReadBooks = () => {
  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    const storedReadBooks = getStoredBook("readBooks");
    setReadBooks(storedReadBooks);
  }, []);

  return (
    <div className="">
      <ul>
        {
        readBooks.map((book, index) => (
          <li key={index.bookId}>{book.bookName}</li>
          ))
        }
          <h2>Read Books: {readBooks.length}</h2>
      </ul>
    </div>
  );
};

export default ReadBooks;
