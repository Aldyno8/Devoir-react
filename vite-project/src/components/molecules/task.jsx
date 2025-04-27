import { ButtonRemove } from "../atoms/button"
import { InputCheckbox } from "../atoms/input"
import { ButtonStart, ButtonFinish } from '../atoms/button'
import '../../styles/style.css'

export const TaskItem = ({ task, onRemove, onStart, onFinish }) => {
	if (task.started) {
		return (
			<li className="task-manager__item">
				<p className="task-manager__task-name">
					{task.name}
				</p>
				<p className="task-manager__task-status">
					In progress ... 
				</p>
				<div>
					<ButtonFinish task={task.name} onFinish={onFinish} />
					<ButtonRemove task={task.name} onRemove={onRemove} />
				</div>
			</li>
		)
	}

	else if (task.finished) {
		return (
			<li className="task-manager__item">
				<p className="task-manager__task-name">
					{task.name}
				</p>
				<p className="task-manager__task-status">
					Finished ... 
				</p>

				<div>
					<ButtonRemove task={task.name} onRemove={onRemove} />
				</div>
			</li>
		)
	}
		return (
			<li className="task-manager__item">
				<p className="task-manager__task-name">
					<ButtonStart task={task.name} onStart={onStart} />
					{task.name}
				</p>
				<p className="task-manager__task-status">
					On hold ... 
				</p>

				<div>
					<ButtonRemove task={task.name} onRemove={onRemove} />
				</div>
			</li>
		)
	}

export const TaskList = ({ tasks, onRemove, onStart, onFinish }) => {
	return (
		<ul className="task-manager__list">
			{tasks.map((task) => (
				<TaskItem key={task.name} task={task} onRemove={onRemove} onStart={onStart} onFinish={onFinish} />
			))}
		</ul>
	)
}
