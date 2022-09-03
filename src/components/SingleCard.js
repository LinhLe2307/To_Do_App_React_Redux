import React from 'react'
import dayjs from 'dayjs';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const SingleCard = ({todo, handleRemove, handleEdit}) => {
  const {id, taskName, description, date} = todo;
  return (
    <div>
      <Card sx={{ maxWidth: 500 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {dayjs().format('YYYY/MM/DD HH:mm:ss')}
        </Typography>
        <Typography variant="h5" component="div">
          {taskName}
        </Typography>
        <Typography variant="body2">
          {description}
        </Typography>
        <Typography variant="body2">
          Due date: {date}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleEdit(todo)}>Edit</Button>
        <Button size="small" onClick={() => handleRemove(id)}>Remove</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default SingleCard