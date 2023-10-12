import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
import { useState } from "react";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const handleDeleteTask = (taskIndex) => {
    setFilteredTasks(tasks.filter((_, index) => index !== taskIndex))
  }

  function handleItemFormSubmit(newTask) {
    setFilteredTasks([...tasks, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} tasks={tasks} setFilteredTasks={setFilteredTasks} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleItemFormSubmit}/>
      <TaskList tasks={filteredTasks} onDelete={handleDeleteTask} />
    </div>
  );
}

export default App;
