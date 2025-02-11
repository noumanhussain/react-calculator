import { useState } from "react";
import "./App.css";
import List from "./components/List";
import { TodoProvider } from "./contexts";
import Add from "./components/Add";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "Todo msg",
      completed: false,
    },
  ]);
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  return (
    <TodoProvider value={{ todos, addTodo }}>
      <Add />
      <List />
    </TodoProvider>
  );
}

export default App;




