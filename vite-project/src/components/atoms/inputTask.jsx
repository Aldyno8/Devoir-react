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
		<div>
			<input type="text" placeholder="New task ..." value={task} onChange={handleChange} />
			<button onClick={handleSubmit} type='submit'>Add</button>
		</div>
	)
}
