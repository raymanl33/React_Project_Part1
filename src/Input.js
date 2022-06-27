import { useState } from "react";

// import the useStore function from store.js to have access to the global state
import { useStore } from "./store";

export default function Input() {
  const [inputValue, setInputValue] = useState({
    id: 0,
    title: "",
    status: false
  });

  const books = useStore((state) => state.books);

  // call out the add function from useStore
  const add = useStore((state) => state.add);


  return (
    <div>
      <input
        value={inputValue.title}
        placeholder="Add new Book"
        onChange={(e) =>
          setInputValue((prevState) => {
            return {
              ...prevState,
              id: books.length ,
              title: e.target.value,
              status: false
            };
          })
        }
        type="text"
      />
      <button onClick={() => add(inputValue)}>Add New Book</button>
    </div>
  );
}
