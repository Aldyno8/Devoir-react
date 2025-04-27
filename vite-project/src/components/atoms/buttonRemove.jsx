import '../../styles/style.css'

export const ButtonRemove = ({ task, onRemove }) => {
	return (
		<button onClick={() => onRemove(task)} className="task-manager__delete-button">X</button>
	)
}