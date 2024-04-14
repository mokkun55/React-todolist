import React from "react";

function InCompleteTodos({ todos, onClickCompete, onClickDelete }) {
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button
                  onClick={() => {
                    onClickCompete(index);
                  }}
                >
                  完了
                </button>
                <button
                  onClick={() => {
                    onClickDelete(index);
                  }}
                >
                  削除
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default InCompleteTodos;
