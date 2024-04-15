import logo from "./logo.svg";
import "./NewTodo.css";
import React, { useState } from "react";

function NewTodo() {
  const [input, setInput] = useState(""); // State to hold the input text

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = { text: input };

    // Create an XMLHttpRequest object
    const xmlCreateRequest = new XMLHttpRequest();

    xmlCreateRequest.onreadystatechange = function () {
      // Wait for readyState to be 4
      if (this.readyState === 4 && this.status === 200) {
        const todo = JSON.parse(this.responseText);
        setInput("");
        console.log(todo);
      } else if (this.readyState === 4) {
        console.log(this.responseText);
        alert("Please enter a todo item before pressing enter or add!");
      }
    };

    // Configure the POST request
    xmlCreateRequest.open("POST", "https://cse204.work/todos", true);
    xmlCreateRequest.setRequestHeader("Content-type", "application/json");
    xmlCreateRequest.setRequestHeader(
      "x-api-key",
      "c33586-0d1ad7-441820-a69dc2-56942e"
    );

    // Send the POST request with the data
    xmlCreateRequest.send(JSON.stringify(data));
  };

  return (
    <div className="new-todo">
      <form id="form-new-todo" onSubmit={handleSubmit}>
        <input
          id="newTitle"
          type="text"
          placeholder="Type a new ToDo here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button id="newSubmit" className="add" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default NewTodo;
