import React from "react";
import { useTodo } from "../contexts";

function List() {
  const { todos } = useTodo();

  return (
    <div>
      {todos.map((item, index) => (
        <h2 key={index}>{item.name}</h2>
      ))}
    </div>
  );
}

export default List;
