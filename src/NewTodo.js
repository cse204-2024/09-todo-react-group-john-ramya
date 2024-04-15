import logo from "./logo.svg";
import "./NewTodo.css";

function NewTodo() {
  return (
    <div class="new-todo">
    <form id="form-new-todo">
      <input
        id="newTitle"
        type="text"
        placeholder="Type a new ToDo here..."
      />
      <button id="newSubmit" class="add" type="submit">
        Add
      </button>
    </form>
  </div>
  );
}

export default NewTodo;
