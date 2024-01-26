import React from "react";
import TasksItem from "../TasksItem/TasksItem";
import "./TasksList.css";

export default function TasksList({ tasks, deleteTask, editTask, setNewTask }) {
  return (
    <ul className="list">
      {tasks.map((task) => (
        <TasksItem
          task={task}
          deleteTask={deleteTask}
          editTask={editTask}
          setNewTask={setNewTask}
          key={task.id}
        />
      ))}
    </ul>
  );
}
