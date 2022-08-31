import React from 'react'

const SingleCard = ({todo}) => {
  const {id, taskName, description, date} = todo;
  return (
    <div>
      <div>id: {id}</div>
      <div>Task Name: {taskName}</div>
      <div>Description: {description}</div>
      <div>Date: {date}</div>
    </div>
  )
}

export default SingleCard