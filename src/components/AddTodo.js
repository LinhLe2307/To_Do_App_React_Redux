
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Calendar from 'react-calendar';
import { useDispatch } from 'react-redux';
import AddForm from './AddForm';
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {
    const [date, setDate] = useState(new Date());
    const [inputForm, setInputForm] = useState({
      taskName: "",
      description: "",
      date: date.toDateString()
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
      e.preventDefault()
      setInputForm({...inputForm, 
        [e.target.name] : e.target.value
      } )
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      return new Promise(resolve => {
        setTimeout(() => {
          const action = addTodo(inputForm);
          dispatch(action);

          navigate('/')
        }, 2000)
        
      })
      
    }

  return (
    <div>
        <div>NewTask</div>
        <Calendar onChange={setDate} value={date}/>
        <AddForm date={date} handleChange={handleChange} handleSubmit={handleSubmit} inputForm={inputForm}/>
    </div>
  )
}

export default AddTodo