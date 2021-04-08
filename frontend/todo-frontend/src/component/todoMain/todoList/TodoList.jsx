import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoListForm from "./TodoListForm";

const TodoList = ({ data: { id, title, todoCards }, deleteTodoColumn }) => {
  const [todos, setTodos] = useState(todoCards);
  const [formSelected, setFormSelected] = useState(false);

  const addTodoItem = (todoCard) => {
    setTodos((todos) => [...todos, todoCard]);
  };

  const deleteTodoItem = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const todoCardList = todos.map((card) => (
    <TodoItem todoCard={card} deleteTodoItem={deleteTodoItem} />
  ));

  const toggleForm = () => {
    //
    setFormSelected((formSelected) => !formSelected);
  };

  return (
    <div>
      <div>
        <span>{title}</span>
        <span>{todos.length}개</span>
        <button onClick={toggleForm}>➕</button>
        <button onClick={() => deleteTodoColumn(id)}>❌</button>
      </div>

      {formSelected ? (
        <TodoListForm addTodoItem={addTodoItem} toggleForm={toggleForm} />
      ) : (
        <></>
      )}
      <div>{todoCardList}</div>
    </div>
  );
};

export default TodoList;
