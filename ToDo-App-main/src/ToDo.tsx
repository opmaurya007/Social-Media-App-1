import axios from "axios";
import React, { useState } from "react";
import "./App.css";

const ToDo = () => {
  const [toDoData, setToDoData] = useState({
    title: "",
    description: "",
  });
  const [message, setMessage] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addToDo = async (event: any) => {
    // event.preventDefault();
    console.log(toDoData);

    if (!title || !description) {
      return;
    }
    try {
      const data = { title, description };
      const response = await axios.post("http://localhost:2020/todos", data);
      if (response.status === 200) {
        setMessage(true);
        setTitle("");
        setDescription("");
        // Reset message after 3 seconds (3000 milliseconds)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1>ToDo list</h1>
        <form onSubmit={addToDo}>
          <div>
            <input
              type="text"
              placeholder="enter todo Title"
              name="title"
              onChange={(event) => setTitle(event.target.value)}
            />
            <input
              type="text"
              placeholder="enter todo Description"
              name="description"
              onChange={(event) => setDescription(event.target.value)}
            />
            <button type="submit">Add To Do</button>
          </div>
          <div>{message === true && <p>To Do item added in the list</p>}</div>
        </form>
      </div>
    </div>
  );
};

export default ToDo;
