import { ButtonRemove } from "../atoms/buttonRemove"
import '../../styles/style.css'

export const Task = ({ task, onRemove }) => {
	return (
		<li className="task-manager__item">
			<p className="task-manager__task-name">{task}</p>
			<ButtonRemove task={task} onRemove={onRemove} />
		</li>
	)
}

export const TaskList = ({ tasks, onRemove }) => {
	return (
		<ul className="task-manager__list">
			{tasks.map((task) => (
				<Task key={task} task={task} onRemove={onRemove} />
			))}
		</ul>
	)
}
