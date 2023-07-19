import React, { useState } from "react";
import Button from "../components/ui/button/Button";
import AddTask from "../components/addTask/AddTask";
import TodoList from "../components/todoList/TodoList";

const App = () => {
  const [todo, setTodo] = useState([]);

  const allTodo = (value) => {
    setTodo([...todo, value]);
  };

  const delateItem = (id) => {
    const data = todo.filter((i) => i.id !== id);
    setTodo(data);
  };
  const updateItem = (id) => {
    const i = todo.find((i) => i.id === id);
    i.completed = true;
    setTodo([...todo]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTask allTodo={allTodo} />
      <TodoList todo={todo} delateItem={delateItem} updateItem={updateItem} />
    </div>
  );
};

export default App;
