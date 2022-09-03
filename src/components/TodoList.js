import React, {useEffect} from 'react';
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { getTodosAsync } from '../redux/todoSlice';
import { List } from '@material-ui/core';

const TodoList = () => {
	const dispatch = useDispatch();
	const todos = useSelector((state)=> state.todos);

	useEffect(()=>{
		dispatch(getTodosAsync())
	}, [dispatch])
	return (
		<List className='list-container'>
			{todos.map((todo) => (
				<TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</List>
	);
};

export default TodoList;
