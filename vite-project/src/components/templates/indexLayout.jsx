import { useState, useEffect } from 'react'
import { TaskList } from "../molecules/task"
import { FormTask } from '../atoms/input'
import { ButtonReset } from '../atoms/button'
import {ListChecks} from 'lucide-react'
import '../../styles/style.css'

export const MainLayout = () => {
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
		const updatedTasks = tasks.filter(task => task.name !== taskToRemove);
		setTasks(updatedTasks);
		localStorage.setItem('tasks', JSON.stringify(updatedTasks));
	};

	const resetTasks = () => {
		setTasks([]);
		localStorage.removeItem('tasks');
	}

	const startTask = (taskTosStart) => {
		const updatedTasks = tasks.map(task => {
			if (task.name === taskTosStart) {
				return { ...task, started: true };
			}
			return task;
		});
		setTasks(updatedTasks);
		localStorage.setItem('tasks', JSON.stringify(updatedTasks));
	}

	const finishTask = (taskToFinish) => {
		const updatedTasks = tasks.map(task => {
			if (task.name === taskToFinish) {
				return { ...task, started: false, finished: true };
			}
			return task;
		});
		setTasks(updatedTasks);
		localStorage.setItem("tasks", JSON.stringify(updatedTasks));
	}

	if (tasks.length > 0) {
		return (
			<div className='task-manager'>
				<p className='task-manager__title'> <ListChecks color='black'/>TODO LIST</p>
				<FormTask onAddTask={addTask}/>
				<TaskList tasks={tasks} onRemove={removeTask} onStart={startTask} onFinish={finishTask}/>
				<ButtonReset onReset={resetTasks} />
			</div>
		)
	}
	else {
		return (
			<div className='task-manager'>
				<p className='task-manager__title'>.TODO LIST</p>
				<FormTask onAddTask={addTask} />
				"Aucune tâche"
			</div>
		)
	}
}