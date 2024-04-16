import "./App.css";
import Todo from "./Todo";

function App() {
  return (
    <div className="App">
      <header>
        <h1>To Do Items</h1>
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
