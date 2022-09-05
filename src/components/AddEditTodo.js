import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import Calendar from "react-calendar";
import dayjs from 'dayjs';
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import AddForm from "./AddForm";
import { addTodo, editTodo } from "../features/todo/todoSlice";

// const isWeekend = (date) => {
//   const day = date.day();
//   return day === 0 || day === 6;
// };

const AddEditTodo = () => {
  const [date, setDate] = useState(dayjs());
  const { todoId } = useParams();
  const editedTodo = useSelector((state) => {
    // sine the todoId is a string and the id is number
    return state.todos.todos.find((x) => x.id === +todoId);
  });
  const initialValues = !todoId
  ? {
    taskName: "",
    description: "",
    date: date.format('YYYY/MM/DD'),
  }
  : editedTodo;
  
  const [inputForm, setInputForm] = useState(initialValues);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setInputForm({ ...inputForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return new Promise((resolve) => {
      setTimeout(() => {
        if (todoId) {
          const action = editTodo(inputForm);
          dispatch(action);
        } else {
          const action = addTodo(inputForm);
          dispatch(action);
        }
        navigate("/", {replace: 'true'});
      }, 2000);
    });
  };

  return (
    <div >
      {/* <Calendar onChange={setDate} value={date} /> */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          orientation="landscape"
          openTo="day"
          value={date.format('YYYY/MM/DD')}
          // shouldDisableDate={isWeekend}
          onChange={(newValue) => {
            setDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <AddForm
        date={date}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        inputForm={inputForm}
      />
    </div>
  );
};

export default AddEditTodo;
