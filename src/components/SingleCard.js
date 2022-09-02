import { Button} from '@mui/material';
import {Link} from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
 
const SingleCard = ({todo, handleRemove, handleEdit}) => {
  const {id, taskName, description, date} = todo;
  return (
    <div>
      <div>id: {id}</div>
      <div>Task Name: {taskName}</div>
      <div>Description: {description}</div>
      <div>Date: {date}</div>
      <Button onClick={() => handleEdit(todo)}>Edit</Button>
      <Button onClick={() => handleRemove(id)}>Remove</Button>
    </div>
  )
}

export default SingleCard