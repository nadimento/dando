"use client";

import { useOptimistic } from "react";
import { createTask } from "../_lib/actions/createTask";
import Logo from "./Logo";
import TodoList from "./TodoList";

export default function TodoForm({ data }) {
  const [optimisticTodos, optimisticAddTodo] = useOptimistic(
    data,
    (currentTodos, newTodo) => [...currentTodos, newTodo],
  );

  async function handleSubmit(formData) {
    const newTask = formData.get("task");
    const newTodo = {
      id: `temp-${Date.now()}`,
      task: newTask,
      completed: false,
    };
    optimisticAddTodo(newTodo);
    await createTask(formData);
  }

  return (
    <>
      <Logo />
      <form action={handleSubmit} className="mt-5">
        <input
          name="task"
          type="text"
          placeholder="Enter your task"
          className="mt-1 block w-full rounded-xl border-2 border-red-300 bg-rose-50 px-4 py-3 text-rose-400 shadow-sm placeholder:text-rose-400 focus:border-rose-500 focus:ring-0 focus:outline-none"
        />

        <button className="mt-2 w-full cursor-pointer rounded-xl bg-rose-600 px-4 py-3 font-medium text-white transition hover:bg-rose-700 active:bg-rose-800">
          Add Task
        </button>
      </form>

      <TodoList data={optimisticTodos} />
    </>
  );
}
