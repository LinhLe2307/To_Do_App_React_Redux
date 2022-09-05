import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import SingleCard from "./SingleCard";
import { removeTodo } from "../features/todo/todoSlice";
import { Button } from "@mui/material";

const HomePage = () => {
  const todos = useSelector((state) => state.todos.todos);
  const searchInput = useSelector((state) => state.todos.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (todoId) => {
    dispatch(removeTodo(todoId));
  };

  const handleEdit = (todo) => {
    const editTodo = `/edit/${todo.id}`;
    navigate(editTodo, { state: todo });
  };

  return (
    <div className="container">
      <Button variant="contained">
        <Link to="add-todo">Add new todo</Link>
      </Button>
      {todos &&
        todos
          .filter(
            (todo) =>
              todo.taskName.toLowerCase().indexOf(searchInput.toLowerCase()) !==
              -1
          )
          .map((todo) => (
            <SingleCard
              todo={todo}
              key={todo.id}
              handleRemove={handleRemove}
              handleEdit={handleEdit}
            />
          ))}
    </div>
  );
};

export default HomePage;
