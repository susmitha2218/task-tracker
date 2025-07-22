import React from "react";

function TaskList({ tasks, onDelete, onToggle }) {
    return (
        <div>
            <ul className="task-list">
                {tasks.map((task) => (
                    <li key={task.id}>
                        <span style={{
                            textDecoration: task.completed ? "line-through" : "none",
                            color: task.completed ? "gray" : "blue",
                            cursor: "pointer"
                        }}
                            onClick={() => onToggle(task.id)}
                        >
                        </span>
                        <button onClick={() => onDelete(task.id)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default React.memo(TaskList);