import "./App.css";
import TodoList from "./TodoList.jsx";
import TodoForm from "./TodoForm.jsx";
import { useState } from "react";


const todos= [
    { id: 1, title: "Finish the React homework" },
    { id: 2, title: "Read 20 pages of a book" },
    { id: 3, title: "Water the plants" },
    { id: 4, title: "Go to the gym" },
    { id: 5, title: "Go to the movies" },
];

function App() {
  const [todoList, setTodoList] = useState(todos);
  return (
    <div>
      <h1>Checkmate</h1>
      <TodoForm />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
