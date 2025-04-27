import { useState, useEffect } from 'react'
import { TaskList } from "../molecules/task"
import { InputTask } from '../atoms/inputTask'
import '../../styles/style.css'

export const IndexLayout = () => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const storedTasks = localStorage.getItem("tasks");
		if (storedTasks) {
			setTasks(JSON.parse(storedTasks));
		}
	}, []);

	const addTask = (newTask) => {
		const updatedTasks = [...tasks, newTask];
		setTasks(updatedTasks);
		localStorage.setItem('tasks', JSON.stringify(updatedTasks));
	};

	const removeTask = (taskToRemove) => {
		const updatedTasks = tasks.filter(task => task !== taskToRemove);
		setTasks(updatedTasks);
		localStorage.setItem('tasks', JSON.stringify(updatedTasks));
	};

	if (tasks.length > 0) {
		return (
			<div className='task-manager'>
				<p className='task-manager__title'>.TODO_LIST</p>
				<InputTask onAddTask={addTask}  className=""/>
				<TaskList tasks={tasks} onRemove={removeTask}/>
			</div>
		)
	}
	else {
		return (
			<div className='task-manager'>
				<p className='task-manager__title'>.TODO_LIST</p>
				<InputTask onAddTask={addTask} />
				"Aucune tâche"
			</div>
		)
	}
}