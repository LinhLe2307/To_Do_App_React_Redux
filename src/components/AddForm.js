import React from "react";
import Button from "@mui/material/Button";
import { TextareaAutosize, TextField } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const AddForm = ({ date, handleChange, handleSubmit, inputForm }) => {
  const { taskName, description } = inputForm;

  return (
    <form onChange={handleChange} onSubmit={handleSubmit} style = {{display:"flex", justifyContent: "center", alignItems: "center", borderRadius:"50px 5px 50px 5px"}}>
      <Card sx={{ minWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://images.unsplash.com/photo-1553531087-b25a0b9a68ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8ZWFydGh8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60https://images.unsplash.com/photo-1553531087-b25a0b9a68ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8ZWFydGh8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          New Task
        </Typography>
        <TextField
        id="outlined-textarea"
        label="Discuss mission!"
        placeholder="Placeholder"
        multiline
        defaultValue={taskName}
        name="taskName"
      />
      <Typography gutterBottom variant="p" component="div">
          Description
        </Typography>
      <TextareaAutosize
        aria-label="minimum height"
        minRows={5}
        placeholder="In more details"
        style={{ width: 200 }}
        defaultValue={description}
        name="description"
      />
      <Typography gutterBottom variant="p" component="div">
          Due date: {date.format('YYYY/MM/DD')}
        </Typography>
      </CardContent>
      <CardActions>
        <Button type="submit" variant="contained">Add Task</Button>
      </CardActions>
    </Card>
    </form>
  );
};

export default AddForm;
