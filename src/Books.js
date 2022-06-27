import { useStore } from "./store";




export default function Books() {
  // pull out the todos array from useState
  const books = useStore((state) => state.books);

  const status = useStore((state) => state.status);

  const editStatus = useStore((state) => state.editStatus);

  const deleteBook = useStore((state) => state.delete);

  const changeIsShownStatus = useStore((state) => state.changeIsShownStatus);

  const changeID = useStore((state) => state.changeID)

  console.log(books);
  const filterTasks = (book) => {
    if (status === "Read" && book.status === true) {
      return book.title;
    } else if (status === "All") {
      return book.title;
    } else if (status === "Reading" && book.status === false) {
      return book.title;
    }
  };

  const handelClick = (e) => {
    // prevent the browser from refreshing
    e.preventDefault();
    handleToggle(e.currentTarget.value);
  };

  const handleToggle = (id) => {
    books.forEach((book) => {
      if (book.id === id) {
        editStatus(id, book.status);
      }
    });
  };

  const editBook = (id) => {
    
    books.forEach((book) => {
      if (book.id === id) { 
        changeIsShownStatus(true);
        changeID(id);
      }
  })};


  return (
    <div>
      <ul>
        {books.filter(filterTasks).map((book) => {
          if (book.status === true) {
            return (
              <div>
              <li
                id={book.id}
                value={book.id}
                onClick={handelClick}
                style={{ listStyle: "none" }}
                style={{ textDecorationLine: "line-through" }}
              >
                {book.title}
              </li>
              <button onClick={() => deleteBook(book.id)}>🗑</button>
              <button onClick={() => editBook(book.id)} >✍️</button>
              </div>
            );
          }
          if (book.status === false) {
            return (
              <div>
              <li
                id={book.id}
                value={book.id}
                onClick={handelClick}
                style={{ listStyle: "none" }}
              >
                {book.title}
              </li>
              <button onClick={() => deleteBook(book.id)}>🗑</button>
              <button  onClick={() => editBook(book.id)}>✍️</button>
              </div>
            );
          }
        })}
      </ul>
    </div>
  );
}
