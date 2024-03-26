import { useLoaderData, useParams } from "react-router-dom";
import ListCard from "./ListCard";

const BookList = () => {
  const booklist = useLoaderData([]);
  const { id } = useParams();
  console.log(booklist, id)
  const book = booklist.find(boo => boo.id == id)
  console.log(book);
  return (
    <div>
      {
      booklist.map((list) => (
        <ListCard key={list.id} list={list}></ListCard>
      ))
      }
    </div>
  );
};

export default BookList;
