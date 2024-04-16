import React, { useEffect, useState } from "react";
import "./Todo.css";
import NewTodo from "./NewTodo"; // Import the NewTodo component

function Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    const requestForList = new XMLHttpRequest();
    requestForList.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const todos = JSON.parse(this.responseText);
        setTodos(todos);
      } else if (this.readyState === 4) {
        console.error(this.responseText);
      }
    };

    requestForList.open("GET", "https://cse204.work/todos", true);
    requestForList.setRequestHeader(
      "x-api-key",
      "c33586-0d1ad7-441820-a69dc2-56942e"
    );
    requestForList.send();
  };

  const toggleTodo = (id, completed) => {
    let data = { completed: !completed };
    let requestComplete = new XMLHttpRequest();
    requestComplete.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        // Update the state instead of manipulating the DOM
        setTodos(
          todos.map((todo) => {
            if (todo.id === id) {
              return { ...todo, completed: !todo.completed };
            }
            return todo;
          })
        );
      }
    };
    requestComplete.open("PUT", `https://cse204.work/todos/${id}`, true);
    requestComplete.setRequestHeader("Content-type", "application/json");
    requestComplete.setRequestHeader(
      "x-api-key",
      "c33586-0d1ad7-441820-a69dc2-56942e"
    );
    requestComplete.send(JSON.stringify(data));
  };

  const todoDelete = (id) => {
    let requestDelete = new XMLHttpRequest();
    requestDelete.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        setTodos(todos.filter((todo) => todo.id !== id));
      }
    };
    requestDelete.open("DELETE", `https://cse204.work/todos/${id}`, true);
    requestDelete.setRequestHeader("Content-type", "application/json");
    requestDelete.setRequestHeader(
      "x-api-key",
      "c33586-0d1ad7-441820-a69dc2-56942e"
    );
    requestDelete.send();
  };

  // Function to add a new todo item
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div>
      {/* Render the NewTodo component and pass the addTodo function as a prop */}
      <NewTodo onAddTodo={addTodo} />
      <h2>Your Items</h2>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`todo ${todo.completed ? "completed" : ""}`}
        >
          <input
            type="checkbox"
            className="check"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id, todo.completed)}
          />
          <span>{todo.text}</span>
          <button className="delete" onClick={() => todoDelete(todo.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todo;
