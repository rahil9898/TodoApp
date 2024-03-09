import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import Welcomemessage from "./components/Welcomemessage";
import "./App.css";
import { useState } from "react";
function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (ItemName, itemDueDate) => {
    console.log(`new item added: ${ItemName}  Date: ${itemDueDate}`);

    const newTodoItem = [
      ...todoItems,
      { name: ItemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItem);
  };

  const handleDeleteButton = (todoItemName) => {
    const newTodoItem = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItem);
  };

  
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <Welcomemessage />}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteButton} />
    </center>
  );
}

export default App;
