import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo";
import NewTodo from "./NewTodo";

function App() {
  return (
    <div className="App">
      <header>
        <h1>To Do Items</h1>
      </header>
      <section id="todo">
        <NewTodo></NewTodo>
        <div id="alltodo" class="todo-items">
          <h2>Your Items</h2>
          <Todo></Todo>
        </div>
      </section>
    </div>
  );
}

export default App;
