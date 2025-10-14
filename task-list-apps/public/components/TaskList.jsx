import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask, toggleTask } from "../features/taskSlice";

function TaskList() {
  const [taskText, setTaskText] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.list);

  const handleAddTask = () => {
    if (taskText.trim() === "") return;
    dispatch(addTask(taskText));
    setTaskText("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>📝 Task List</h2>
      
      <div>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Enter a new task"
          style={{
            padding: "8px",
            width: "200px",
            marginRight: "10px",
          }}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <ul style={{ listStyle: "none", marginTop: "20px", padding: 0 }}>
        {tasks.length === 0 && <p>No tasks added yet!</p>}
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              margin: "10px 0",
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {task.text}
            <button
              onClick={() => dispatch(toggleTask(task.id))}
              style={{ marginLeft: "10px" }}
            >
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button
              onClick={() => dispatch(removeTask(task.id))}
              style={{ marginLeft: "10px", color: "red" }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
