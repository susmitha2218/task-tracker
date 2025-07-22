import React from 'react';

function CompletedTaskList({tasks = [], onToggle, onDelete}) {
    const CompletedTasks = tasks.filter(task => task.completed);

    return (
        <div>
            <h3>✅ Completed Tasks</h3>
            <ul>
                {CompletedTasks.map(task => (
                    <li key={task.id}>
                        <span
                            style={{
                                textDecoration: "line-through",
                                color: "gray",
                                cursor: "pointer"
                            }}
                            onClick={() => onToggle(task.id)}
                        >
                            {task.text}
                        </span>
                        <button onClick={() => onDelete(task.id)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default React.memo(CompletedTaskList);