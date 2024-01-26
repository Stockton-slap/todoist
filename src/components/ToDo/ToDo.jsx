import React, { useState } from "react";
import "./ToDo.css";
import TasksList from "../TasksList/TasksList";

export default function ToDo({ addTask, deleteTask, editTask, tasks }) {
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;

    setNewTask(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask({ id: Date.now(), task: newTask });
    setNewTask("");
  };

  return (
    <div className="container">
      <h1>Todoist</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            value={newTask}
            placeholder="Create a new task..."
            onChange={handleChange}
          />
          <button className="btn" type="submit">
            + Add task
          </button>
        </form>
        <TasksList
          tasks={tasks}
          deleteTask={deleteTask}
          editTask={editTask}
          setNewTask={setNewTask}
        />
      </div>
    </div>
  );
}
