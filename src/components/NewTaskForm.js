import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [addCategory, setAddCategory] = useState("All")
  const [addText, setAddText] = useState("")

  function handleSubmit(event){
    event.preventDefault();

    const newTask = {
      text: addText,
      category: addCategory,
    }
    onTaskFormSubmit(newTask);
    setAddText("");
    setAddCategory("All");
  }

    function onTextChange(event) {
      setAddText(event.target.value)
    }

    function onCategoryChange(event) {
      setAddCategory(event.target.value)
    }

  
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={onTextChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={onCategoryChange}>
          {categories.map((catergory) => (
            <option key={catergory}>{catergory}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;


/* 
{categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
*/