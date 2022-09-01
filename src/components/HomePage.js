import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import SingleCard from './SingleCard';
import { removeTodo } from '../features/todo/todoSlice';

const HomePage = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch()

  const handleRemove = (todoId) => {
    dispatch(removeTodo(todoId))
  }
  // console.log(todos) 
  return (
    <div>
      HomePage
      <Link to="add-todo">Add new todo</Link>
      {todos && todos.map(todo => <SingleCard todo={todo} key={todo.id} handleRemove={handleRemove}/>)}
    </div>
  )
}

export default HomePage