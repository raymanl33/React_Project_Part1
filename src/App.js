import "./styles.css";
import Input from "./Input";
import Books from "./Books"
import Buttons from "./Buttons"
import Edit from "./Edit";


export default function App() {
  return (
    <div className="App">
     <Input />
     <Books />
     <Buttons />
     <Edit />
    </div>
  );
}
