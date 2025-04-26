export const ButtonRemove = ({ task, onRemove }) => {
	return (
		<div>
			<button onClick={() => onRemove(task)}>X</button>
		</div>
	)
}