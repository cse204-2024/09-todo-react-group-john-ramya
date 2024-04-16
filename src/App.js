import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo";
import NewTodo from "./NewTodo";

function App() {
  return (
    <div className="App">
      <header>
        <h1>John and Ramya's To Do Items</h1>
      </header>
      <section id="todo">
        <div id="alltodo" className="todo-items">
          <Todo></Todo>
        </div>
      </section>
    </div>
  );
}

export default App;
