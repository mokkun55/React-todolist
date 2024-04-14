import { useState } from "react";
import "./Todo.css";
import InputTodo from "./components/InputTodo";
import InCompleteTodos from "./components/InCompleteTodos";
import CompleteTodos from "./components/CompleteTodos";

function Todo() {
  const [incompleteTodos, setInconpleteTodos] = useState([]);
  const [completeTodos, setConpleteTodos] = useState([]);

  const [todoText, setTodoText] = useState("");

  const onChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };

  const onClickAdd = () => {
    if (!todoText) return;
    const newTodos = [...incompleteTodos, todoText];
    setInconpleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setInconpleteTodos(newTodos);
  };

  const onClickCompete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setInconpleteTodos(newIncompleteTodos);
    setConpleteTodos(newCompleteTodos);
  };

  const onClickUndo = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setInconpleteTodos(newIncompleteTodos);
    setConpleteTodos(newCompleteTodos);
  };

  const isMaxLimitIncompleteTodos = incompleteTodos.length >= 5;

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={isMaxLimitIncompleteTodos}
      />

      {isMaxLimitIncompleteTodos && (
        <p style={{ color: "red" }}>
          登録できるtodoは{incompleteTodos.length}個まで！
        </p>
      )}

      <InCompleteTodos
        todos={incompleteTodos}
        onClickCompete={onClickCompete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickUndo={onClickUndo} />
    </>
  );
}

export default Todo;
