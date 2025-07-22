import React, { useRef} from 'react';

function TaskForm({onAdd}){
    const inputRef = useRef();

    const handleAdd = () => {
        const task  = inputRef.current.value;
        if (task.trim() === '') return;
        onAdd(task);
        inputRef.current.value = '';
        inputRef.current.focus();
    };
    return(
        <div className='form'>
            <input ref = {inputRef} placeholder='Enter new Task'/>
            <button onClick={handleAdd}>Add Task</button>
        </div>
    );   
}

export default React.memo(TaskForm);