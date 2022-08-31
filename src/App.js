import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import Layout from "./pages/Layout";
import HomePage from "./components/HomePage";
import AddTodo from "./components/AddTodo";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}/>
          <Route path="add-todo" element={<AddTodo />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App;
