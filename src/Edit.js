import { useStore } from "./store";
import { useState } from "react";


export default function Edit() {
    const isShown = useStore((state) => state.isShown);

    const changeIsShownStatus = useStore((state) => state.changeIsShownStatus);

    const id = useStore((state) => state.id);

    const books = useStore((state) => state.books);

    const edit = useStore((state) => state.edit)

    const [inputValue, setInputValue] = useState("");


    const changeIsShown = (id, bookTitle) => {
        changeIsShownStatus(false)
        edit(id, bookTitle)
    }


    return (
        <div>
         
        {books.map((book) => {
        if (book.id === id && isShown){
          return  (
            <div>
          <input
            type="text"
            value={inputValue}
            placeholder={book.title}
            onChange={(e) =>
                setInputValue(e.target.value)
            }
            />
            <button onClick={() => changeIsShown(id, inputValue)}>Edit</button>
            </div>
          )
        }
        })}
         
     </div>
    )
}