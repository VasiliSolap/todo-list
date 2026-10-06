import "./App.css";

function App() {
  const todoList = [
    { id: 1, title: "Finish the React homework" },
    { id: 2, title: "Read 20 pages of a book" },
    { id: 3, title: "Water the plants" },
    { id: 4, title: "Go to the gym" },
    { id: 5, title: "Go to the movies" },
  ];

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
