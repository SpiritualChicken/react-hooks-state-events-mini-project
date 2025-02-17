import {React, useState } from "react";

function CategoryFilter({ categories, setFilteredTasks, tasks }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleClick = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredTasks(tasks);
    } else {
      const filteredTasks = tasks.filter(task => task.category === category)
      setFilteredTasks(filteredTasks)
    }
  };

  

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button key={category} className={selectedCategory === category ? "selected" : ""} onClick={() => handleClick(category)} >{category} </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
