import '../../styles/style.css'
import { Trash , Play, BookmarkCheck } from 'lucide-react'
export const ButtonRemove = ({ task, onRemove }) => {
	return (
		<button onClick={() => onRemove(task)} className="task-manager__edit-button"><Trash color="red"/></button>
	)
}

export const ButtonReset = ({onReset}) => {
	return (
		<button onClick={onReset} >Reset</button>
	)
}

export const ButtonStart = ({task, onStart }) => {
	return (
		<button onClick={() => onStart(task) } className='task-manager__edit-button'><Play size={15} color="green" fill='green' /></button>
	)
}

export const ButtonFinish = ({task, onFinish}) => {
	return (
		<button onClick={() => onFinish(task)} className='task-manager__edit-button'><BookmarkCheck color='green'/></button>
	)
}