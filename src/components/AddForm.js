import React from "react";
import Button from "@mui/material/Button";
import { TextareaAutosize, TextField } from "@mui/material";

const AddForm = ({ date, handleChange, handleSubmit, inputForm }) => {
  const { taskName, description } = inputForm;

  return (
    <form onChange={handleChange} onSubmit={handleSubmit}>
      <label>New Task</label>
      <TextField
        id="outlined-textarea"
        label="Multiline Placeholder"
        placeholder="Placeholder"
        multiline
        defaultValue={taskName}
        name="taskName"
      />
      <label>Notes</label>
      <TextareaAutosize
        aria-label="minimum height"
        minRows={5}
        placeholder="Minimum 3 rows"
        style={{ width: 200 }}
        defaultValue={description}
        name="description"
      />
      <p>{date.toString()}</p>
      <Button type="submit" variant="contained">
        Add Task
      </Button>
    </form>
  );
};

export default AddForm;
