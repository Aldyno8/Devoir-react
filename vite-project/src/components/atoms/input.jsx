import { useState } from 'react';

export const FormTask = ({ onAddTask }) => {
	const [taskData, setTaskData] = useState({
		name: '',
		started: false,
		finished: false,
	});
	
	const handleChange = (e) => {
		setTaskData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (taskData.name.trim()) {
			onAddTask(taskData);
			setTaskData({
				name: '',
				started: false,
				finished: false,
			});
		}
	}

	return (
		<form className='task-manager__form'>
			<input name='name' type="text" placeholder="New task ..." value={taskData.name} onChange={handleChange} className='task-manager__input'/>
			<button onClick={handleSubmit} type='submit' className='task-manager__button'>Add</button>

		</form>
	)
}

export const InputCheckbox = () => {
	const [isChecked, setIsChecked]  = useState(false);
	
	const handleChange = () => {
		setIsChecked(!isChecked);
	}
	return (
		<input type="checkbox" checked={isChecked} onChange={handleChange} />
	)
}