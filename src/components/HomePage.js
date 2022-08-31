import React from 'react'
import { useSelector } from 'react-redux'
import SingleCard from './SingleCard';

const HomePage = () => {
  const todos = useSelector(state => state.todos);
  console.log(todos)
  return (
    <div>
      HomePage
      {todos && todos.map(todo => <SingleCard todo={todo} key={todo.id}/>)}
    </div>
  )
}

export default HomePage