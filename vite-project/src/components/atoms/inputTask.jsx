import { useState } from 'react';

export const InputTask = ({ onAddTask }) => {
	const [task, setTask] = useState('');
	
	const handleChange = (e) => {
		setTask(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (task.trim()) {
			onAddTask(task);
			setTask('');
		}
	}

	return (
		<form className='task-manager__form'>
			<input type="text" placeholder="New task ..." value={task} onChange={handleChange} className='task-manager__input'/>
			<button onClick={handleSubmit} type='submit' className='task-manager__button'>Add</button>
		</form>
	)
}
