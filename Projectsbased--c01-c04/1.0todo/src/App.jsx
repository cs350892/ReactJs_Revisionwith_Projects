import React from "react";
import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItem1 from "./components/ToDoItem1";
import "./App.css";

function App() {
  return (
    <>
      <center className="todo-container">
        <AppName></AppName>
        <AddToDo></AddToDo>
        <ToDoItem1></ToDoItem1>
        <div className="row">
          <div className="col-6">5 Question on LeetCode</div>
          <div className="col-4">06//10/2024</div>
          <div className="col-2">
            <button type="button" class="btn btn-danger">
              Danger
            </button>
          </div>
        </div>
      </center>
    </>
  );
}

export default App;
