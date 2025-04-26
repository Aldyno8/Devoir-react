import { ButtonRemove } from "../atoms/buttonRemove"

export const Task = ({task, onRemove}) => {
	return (
		<div style={{display:"flex", justifyContent:"space-between"}}>
			<li>{task}</li>
			<ButtonRemove task={task} onRemove={onRemove} />
		</div>
	)
}  

export const TaskList = ({tasks, onRemove}) => {
	return (
		<ul>
			{tasks.map((task) => (
				<Task key={task} task={task} onRemove={onRemove} />
			))}
		</ul>
	)
}
