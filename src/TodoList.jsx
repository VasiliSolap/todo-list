function TodoList() {
    const todoList = [
    { id: 1, title: "Finish the React homework" },
    { id: 2, title: "Read 20 pages of a book" },
    { id: 3, title: "Water the plants" },
    { id: 4, title: "Go to the gym" },
    { id: 5, title: "Go to the movies" },
  ];

  return (
    <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
    </ul>
  );
}

export default TodoList;