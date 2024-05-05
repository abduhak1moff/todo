import { ToastContainer } from "react-toastify";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <ToastContainer autoClose={500} />
      <Todo />
    </div>
  );
}

export default App;
