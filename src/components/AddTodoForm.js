import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAsync } from '../redux/todoSlice';

const AddTodoForm = () => {
	const [value, setValue] = useState('');

	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(addTodoAsync({
			title: value,
		})
		);
	};

	return (
		<form className='form' onSubmit={onSubmit}>
			<TextField
				placeholder='New Task'
				value={value}
				onChange={(event) => setValue(event.target.value)}
				className='form-input'
				variant="outlined"
			></TextField>

			<Button  variant="contained" type='submit' className='form-button'>
				Add
			</Button>
		</form>
	);
};

export default AddTodoForm;
