import React, {useState, useEffect, useRef, useMemo, useCallback} from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm'; 
import './App.css';

function App() {
  const [tasks, setTasks] = useState( () => {
    const saved = localStorage.getItem('tasks');
    return saved? JSON.parse(saved) : [];
  });

  const [search, setSearch] = useState('');

  const filteredTasks = useMemo(() => {
    return tasks.filter(task => task.toLowerCase().includes(search.toLowerCase()));
  },[search,tasks]);

  const addTask = useCallback((task) =>{
    setTasks(prev => [...prev,task]);
  },[]);

  useEffect( () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  },[tasks]);
  return (
    <div className="App">
      <h2>📝 Task Tracker</h2>
      <TaskForm  onAdd ={addTask}/>
      <input
      placeholder='search Tasks.........'
      value = {search}
      onChange={(e) => setSearch(e.target.value)}
      />
      <TaskList tasks = {filteredTasks}/>
    </div>
  );
}

export default App;
