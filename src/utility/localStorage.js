const getStoredBook = () => {
  const storedBook = localStorage.getItem("boooks");
  if (storedBook) {
    return JSON.parse(storedBook);
  }
  return [];
};

const saveBook = id => {
    const storedBooook = getStoredBook()
    const exist = storedBooook.find(bookId => bookId === id)
    if (!exist) {
        storedBooook.push(id)
        localStorage.setItem("boooks", JSON.stringify(storedBooook))
    }
};
export { saveBook, getStoredBook };
