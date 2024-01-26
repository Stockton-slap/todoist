import React, { useState } from "react";
import "./TasksItem.css";

export default function TasksItem({ task, deleteTask, editTask, setNewTask }) {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(task.task);
  const [isEditChanged, setIsEditChanged] = useState(false);

  const handleDeleteClick = () => {
    deleteTask(task.id);
  };

  const handleEditClick = () => {
    setIsEdit(true);
  };

  const handleChange = (e) => {
    const value = e.target.value;

    setValue((prev) => {
      if (prev !== value) {
        setIsEditChanged(true);
        return value;
      }
    });
  };

  const handleClick = () => {
    editTask(task.id, value);
    setIsEditChanged(false);
    setIsEdit(false);
  };

  return (
    <li className="item">
      {isEdit ? (
        <input type="text" value={value} onChange={handleChange} />
      ) : (
        <p>{task.task}</p>
      )}
      <div>
        <button className="btn" type="button" onClick={handleDeleteClick}>
          Delete
        </button>

        {isEditChanged ? (
          <button className="btn editBtn" type="button" onClick={handleClick}>
            Confirm
          </button>
        ) : (
          <button
            className="btn editBtn"
            type="button"
            onClick={handleEditClick}
          >
            Edit
          </button>
        )}
      </div>
    </li>
  );
}
