import { Checkbox, IconButton, ListItem } from '@material-ui/core';
import { DeleteRounded } from '@material-ui/icons';
import  { useDispatch } from 'react-redux';
import { toggleCompleteAsync, deleteTodoAsync } from '../redux/todoSlice';

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const handleCompleteClick = ()=>{
		dispatch(toggleCompleteAsync({
			id: id, completed: !completed
		})
		);
	}

	const handleDeleteClick = () => {
		dispatch(deleteTodoAsync({ id: id }));

	}

	return (
		<ListItem disableGutters className={`${completed && 'checked'}`}>
			<Checkbox color="primary"  edge="start" type='checkbox' checked={completed} onChange={handleCompleteClick}></Checkbox>
		    <div className='added-item'>{title}</div>
			<IconButton aria-label="delete" onClick={handleDeleteClick}>
				<DeleteRounded color='error' />
			</IconButton>
		</ListItem>
	);
};

export default TodoItem;
