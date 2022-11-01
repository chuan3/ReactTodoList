import { useState } from "react";
import { Task } from "./Task";
import "./App.css";

function App() {
  const [todolist, setToDoList] = useState([]);
  //create an array State to store all the values
  const [newTask, setNewTask] = useState("");
  //create a string State to get the input string

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  //create a function to handle the input change, when the event trigger read the values

  const addTask = () => {
    const task = {
      id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
      taskName: newTask,
    };
    const newTodoList = [...todolist, task];
    setToDoList(newTodoList);
    {
      /* ... means =>  Rest parameter or Spread parameter   */
    }
  };
  const deleteTask = (id) => {
    const newTodoList = todolist.filter((task) => task.id !== id);
    setToDoList(newTodoList);
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        {/*Use onchange if someone change(input) something*/}
        <button onClick={addTask}>++</button>
      </div>
      <div classsName="list">
        {todolist.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              deleteTask={deleteTask}
            />
          );
        })}
        {/*Use map functon to loop through the array*/}
      </div>
    </div>
  );
}

export default App;
