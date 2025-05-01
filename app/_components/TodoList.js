"use client";

import ListOfTodos from "./ListOfTodos";
import TasksCompleted from "./TasksCompleted";

export default function TodoList({ data, onError }) {
  if (!data.length) return <TasksCompleted />;

  return <ListOfTodos onError={onError} data={data} />;
}
