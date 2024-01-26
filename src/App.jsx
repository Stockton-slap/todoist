import { useEffect, useState } from "react";
import "./App.css";
import { ToDo } from "./components";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((elem) => elem.id !== id);
    setTasks(updatedTasks);
  };

  const editTask = (id, value) => {
    const matchId = tasks.find((elem) => elem.id === id);
    matchId.task = value;

    setTasks((prev) =>
      prev.map((elem) => (elem.id === id ? { ...elem, task: value } : elem))
    );
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="app">
      <ToDo
        addTask={addTask}
        deleteTask={deleteTask}
        tasks={tasks}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
