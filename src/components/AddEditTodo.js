
import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import Calendar from 'react-calendar';
import { useDispatch, useSelector } from 'react-redux';
import AddForm from './AddForm';
import { addTodo, editTodo } from '../features/todo/todoSlice';

const AddEditTodo = () => {
    const [date, setDate] = useState(new Date());
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {todoId} = useParams();
    const editedTodo = useSelector(state => {
      // sine the todoId is a string and the id is number
      return state.todos.find(x => x.id === +todoId)
    }
      );
    const initialValues = !todoId ? {
      taskName: "",
      description: "",
      date: date.toDateString()
    } : editedTodo

    const [inputForm, setInputForm] = useState(initialValues);

    const handleChange = (e) => {
      e.preventDefault()
      setInputForm({...inputForm, 
        [e.target.name] : e.target.value
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      return new Promise(resolve => {
        setTimeout(() => {
          if(todoId) {
          const action = editTodo(inputForm);
          dispatch(action);
          } else {
            const action = addTodo(inputForm);
          dispatch(action);
        }
        navigate('/')
      }, 2000)})
      } 

  return (
    <div>
        <div>NewTask</div>
        <Calendar onChange={setDate} value={date}/>
        <AddForm date={date} handleChange={handleChange} handleSubmit={handleSubmit} inputForm={inputForm}/>
    </div>
  )
}

export default AddEditTodo