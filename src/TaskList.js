import React from "react";

function TaskList({tasks}){
    return(
        <div>
            <ul className="task-list">
                {tasks.map((task,index)=> (
                    <li key={index}>✅ {task}</li>
                ))}
            </ul>
        </div>
    );
}

export default React.memo(TaskList);