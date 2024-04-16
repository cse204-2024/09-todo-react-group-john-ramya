import React, { useEffect, useState } from "react";
import "./Todo.css";

function Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
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
  }, []);

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
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

  return (
    <div>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`todo ${todo.completed ? "completed" : ""}`}
        >
          <input
            type="checkbox"
            className="check"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
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
