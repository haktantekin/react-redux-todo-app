import { Container } from '@material-ui/core';
import React from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import './style/todo.scss';

const App = () => {
	return (
		<Container fluid className='container'>
			<h1>ToDo List</h1>
			<AddTodoForm />
			<TodoList />
		</Container>
	);
};

export default App;
