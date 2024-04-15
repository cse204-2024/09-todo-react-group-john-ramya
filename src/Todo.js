import logo from "./logo.svg";
import "./Todo.css";

function Todo() {
  return (
    <div id="exampleId" class="todo">
      <input type="checkbox" class="check" />
      <span>Example Todo Text</span>
      <button class="delete">Delete</button>
    </div>
  );
}

export default Todo;
