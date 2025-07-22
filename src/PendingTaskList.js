import React from "react";
import CompletedTaskList from "./CompletedTaskList";

function PendingTaskList({tasks = [], onToggle, onDelete}) {
    const pendingTasks = tasks.filter(task => !task.completed);

    return (
        <div>
            <h3>🕐 Pending Tasks</h3>
            <ul>
                {pendingTasks.map(task => (
                    <li key={task.id}>
                        <span
                            style={{ cursor: "pointer" }}
                            onClick={() => onToggle(task.id)}
                        >
                            {task.completed ? '✅' : '⬜'} {task.text}
                        </span>
                        <button onClick={() => onDelete(task.id)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default React.memo(PendingTaskList);