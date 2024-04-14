import React from "react";

function CompleteTodos({ todos, onClickUndo }) {
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button onClick={() => onClickUndo(index)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CompleteTodos;
