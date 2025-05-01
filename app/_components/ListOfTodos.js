"use client";

import { startTransition, useOptimistic } from "react";
import Todo from "./Todo";
import { deleteTask } from "../_lib/actions/deleteTask";

export default function ListOfTodos({ data, onError }) {
  const [optimisticTodos, updateOptimisticTodos] = useOptimistic(
    data,
    (currentTodos, { type, id, completed }) => {
      if (type === "delete") {
        return currentTodos.filter((todo) => todo.id !== id);
      }
      if (type === "complete") {
        return currentTodos.map((todo) =>
          todo.id === id ? { ...todo, completed } : todo,
        );
      }
      return currentTodos;
    },
  );

  async function handleDelete(id) {
    startTransition(() => {
      updateOptimisticTodos({ type: "delete", id });
    });

    onError("");

    await deleteTask(id);
  }

  function handleComplete(id, completed) {
    startTransition(() => {
      updateOptimisticTodos({ type: "complete", id, completed });
    });
  }

  return (
    <>
      <ul className="mt-5">
        {optimisticTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={handleDelete}
            onComplete={handleComplete}
            onError={onError}
          />
        ))}
      </ul>

      {optimisticTodos.length > 0 ? (
        <p className="px-5 py-3 text-center text-gray-400">
          {optimisticTodos.filter((t) => t.completed).length} of{" "}
          {optimisticTodos.length} tasks completed biatch
        </p>
      ) : null}
    </>
  );
}
