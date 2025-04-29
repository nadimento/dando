"use client";

import { startTransition, useOptimistic } from "react";
import Todo from "./Todo";
import { deleteTask } from "../_lib/actions/deleteTask";

export default function ListOfTodos({ data }) {
  const [optimisticTodos, optimisticDelete] = useOptimistic(
    data,
    (currentTodos, id) => {
      return currentTodos.filter((todo) => todo.id !== id);
    },
  );

  async function handleDelete(id) {
    startTransition(() => {
      optimisticDelete(id);
    });

    await deleteTask(id);
  }

  return (
    <>
      <ul className="mt-5">
        {optimisticTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} onDelete={handleDelete} />
        ))}
      </ul>

      {data.length > 0 ? (
        <p className="px-5 py-3 text-center text-gray-400">
          {data.filter((t) => t.completed).length} of {data.length} tasks
          completed biatch
        </p>
      ) : null}
    </>
  );
}
