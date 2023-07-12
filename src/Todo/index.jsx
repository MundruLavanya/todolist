import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Todo.css"

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
 const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: uuidv4(), title: e.target[0].value };
   
    e.target[0].value = "";
    if(newTodo.title == ""){
      alert("Enetr the title")
    }
    else{
      setTodoList([...todoList, newTodo]);
    }
  };

  const handleDeleteTodo = (todoId) => {
    const filteredTodoList = todoList.filter((todo) => todo.id !== todoId);
    setTodoList(filteredTodoList);
  };

  const handleEditTodo = (todoId) => {
    const editedText = prompt("Edit a value");
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, title: editedText };
      }
      return todo;
    });
    setTodoList(updatedTodoList);
  };

  return (
    <div className="Todoapp">
    <div className="TodoWrapper">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter the name"
          className="todo-input"
        />
        <input type="submit" value="Add Task" className="todo-btn" />
      </form>

      {todoList.map((todo) => (
        
        <div className="Todooo">
          <div key={todo.id}>
            <p>{todo.title}</p>
            {/* <button onClick={() => handleEditTodo(todo.id)}>Edit</button>
          <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button> */}
            <div className="Todooo">
              <FontAwesomeIcon
                icon={faPenToSquare}
                onClick={() => handleEditTodo(todo.id)}
              />
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => handleDeleteTodo(todo.id)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Todo;
