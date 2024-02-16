import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import { ToDoList } from "./components/todo-list";
import Editor from "./components/editor";

function App() {
  const [allTaskList, setAllTaskList] = useState([]);
  const [openTaskId, setOpenTaskId] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setAllTaskList(data));
  }, []);

  return (
    <Fragment>
      <Header />
      <div className="main">
        <ToDoList allTaskList={allTaskList} setOpenTaskId={setOpenTaskId} />
        <Editor openTaskId={openTaskId} />
      </div>
    </Fragment>
  );
}

export default App;
