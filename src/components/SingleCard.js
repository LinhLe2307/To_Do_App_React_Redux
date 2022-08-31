import React from 'react'
import Button from '@mui/material/Button';
import { TextareaAutosize, TextField } from '@mui/material';

const SingleCard = ({date}) => {
  return (
    <form>
      <label>New Task</label>
      <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
        />
      <label>Notes</label>
      <TextareaAutosize
        aria-label="minimum height"
        minRows={5}
        placeholder="Minimum 3 rows"
        style={{ width: 200 }}
      />
      <p>{date.toString()}</p>
      <Button variant="contained">Add Task</Button>
    </form>
  )
}

export default SingleCard