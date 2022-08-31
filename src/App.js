import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import Layout from "./pages/Layout";
import HomePage from "./components/HomePage";
import NewTask from "./components/NewTask";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}/>
          <Route path="new-task" element={<NewTask />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App;
