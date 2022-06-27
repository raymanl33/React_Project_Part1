import create from "zustand";
import produce from "immer";


// create function takes a callback function
export const useStore = create((set) => ({
  books: [],
  status: "All",
  isShown: false,
  id: 0,
  changeStatus: (status) =>
    set(
      produce((state) => {
        state.status = status
      })
    ),
  add: (title) => 
  // set() is a function from immer 
  // immer allowes better immutability by allowing us to
  // making changes to the array by just performing actions 
  // such as .push, without having the need to copy the array
    set(
      produce((state) => {
        state.books.push( title );
      })
    ),
  editStatus: (id, status) =>
    set(
      produce((state) => {
        state.books.forEach(book => {
          if (book.id === id && status === true) {
            book.status = false; 
          } else if (book.id === id && status === false) {
            book.status = true;
          }
        })
      })
    ),
    delete: (id) => 
    set(
      produce((state) => {
        state.books.splice(id, 1);
      })
    ),
    edit: (id, bookDescription) => 
    set(
      produce((state) => {
        state.books.forEach(book => {
          if (book.id === id) {
            book.title = bookDescription
          }
        })
      })
    ),
    changeIsShownStatus: (status) => 
      set(
        produce((state) => {
          state.isShown = status
        })
      ),
      changeID: (id) => 
        set(
          produce((state) => {
            state.id = id
          })
        )
}));