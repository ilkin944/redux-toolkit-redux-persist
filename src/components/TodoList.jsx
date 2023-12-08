import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, updateTodo } from '../store/reducers/todoReducer';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  
  const [newTodo, setNewTodo] = useState('');
  const [editingTodoId, setEditingTodoId] = useState(null);

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      if (editingTodoId !== null) {
        dispatch(updateTodo({ id: editingTodoId, text: newTodo }));
        setEditingTodoId(null);
      } else {
        dispatch(addTodo({ id: Date.now(), text: newTodo }));
      }
      setNewTodo('');
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleEditTodo = (id, text) => {
    setEditingTodoId(id);
    setNewTodo(text);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
            <button onClick={() => handleEditTodo(todo.id, todo.text)}>Edit</button>
          </li>
        ))}
      </ul>
      <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={handleAddTodo}>
        {editingTodoId !== null ? 'Update Todo' : 'Add Todo'}
      </button>
    </div>
  );
};

export default TodoList;
