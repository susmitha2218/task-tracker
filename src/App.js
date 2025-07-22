import React, { useState, useEffect, useMemo, useCallback } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import CompletedTaskList from './CompletedTaskList';
import PendingTaskList from './PendingTaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  const [search, setSearch] = useState('');

  const filteredTasks = useMemo(() => {
    return Array.isArray(tasks) ?
      tasks.filter(task =>
        task.text.toLowerCase().includes(search.toLowerCase()))
        : [];
  }, [search, tasks]);

  const addTask = useCallback((text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks(prev => [...prev, newTask])
  }, []);

  const deleteTask = useCallback((id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  }, []);

  const toggleComplete = useCallback((id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  return (
    <div className="App">
      <h2>📝 Task Tracker</h2>
      <TaskForm onAdd={addTask} />
      <input
        placeholder='search Tasks.........'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search.trim() !== '' ? (
  // Show search results only
  <div>
    <h3>🔍 Search Results</h3>
    {filteredTasks.length > 0 ? (
      <TaskList
        tasks={filteredTasks}
        onToggle={toggleComplete}
        onDelete={deleteTask}
      />
    ) : (
      <p style={{ color: 'red', fontWeight: 'bold' }}>❌ No tasks found</p>
    )}
  </div>
) : (
  // Show normal layout: pending + completed
  <div style={{ display: 'flex', gap: '20px', justifyContent: 'space-around' }}>
    <PendingTaskList
      tasks={tasks}
      onToggle={toggleComplete}
      onDelete={deleteTask}
    />
    <CompletedTaskList
      tasks={tasks}
      onToggle={toggleComplete}
      onDelete={deleteTask}
    />
  </div>
)}
    </div>
  );
}

export default App;
