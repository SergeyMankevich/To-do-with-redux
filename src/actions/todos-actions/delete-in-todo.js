import { deleteTodo } from '../../api';

export const DELETE_TODO = (id) => ({
	type: 'DELETE_TODO',
	payload: id,
});

export const deleteInTodos = (id) => (dispatch) =>
	deleteTodo(id).then(() => {
		dispatch(DELETE_TODO(id));
	});
