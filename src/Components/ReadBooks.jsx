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
      <h2>Read Books:</h2>
      <ul>
        {readBooks.map((book, index) => (
          <li key={index}>{book.bookName}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReadBooks;
