import { Button } from '@mui/material';
import React from 'react'

const SingleCard = ({todo, handleRemove}) => {
  const {id, taskName, description, date} = todo;

  return (
    <div>
      <div>id: {id}</div>
      <div>Task Name: {taskName}</div>
      <div>Description: {description}</div>
      <div>Date: {date}</div>
      <Button >Edit</Button>
      <Button onClick={() => handleRemove(id)}>Remove</Button>
    </div>
  )
}

export default SingleCard