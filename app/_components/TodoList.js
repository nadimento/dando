"use client";

import ListOfTodos from "./ListOfTodos";
import TasksCompleted from "./TasksCompleted";

export default function TodoList({ data }) {
  if (!data.length) return <TasksCompleted />;

  return <ListOfTodos data={data} />;
}
