
// import the useStore function from store.js to have access to the global state
import { useStore } from "./store";

export default function Buttons() {

   // call out the add function from useStore
   const changeStatus = useStore((state) => state.changeStatus);

   
  return (
    <div> 
      <button onClick={() => changeStatus("Read")}>Read</button>
      <button onClick={() => changeStatus("Reading")}>Reading</button>
      <button onClick={() => changeStatus("All")}>All</button>
    </div>
  )
}

