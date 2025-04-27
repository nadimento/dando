"use client";

import { completeTask } from "../_lib/actions/completeTask";
import { deleteTask } from "../_lib/actions/deleteTask";
import { FaRegTrashCan } from "react-icons/fa6";

export default function Todo({ todo }) {
  const { task, id, completed } = todo;

  return (
    <li
      className={[
        // Base styles
        "mx-auto mb-3 flex w-full list-none items-center justify-between",
        "rounded-xl border border-gray-100 bg-gray-50 px-5 py-3 shadow",
        "cursor-pointer hover:bg-gray-100",
        completed
          ? "bg-green-200 line-through decoration-gray-700 decoration-2 opacity-60"
          : "",
      ].join(" ")}
      onClick={() => completeTask(id)}
    >
      <p className="text-gray-700">{task}</p>
      <button className="cursor-pointer" onClick={() => deleteTask(id)}>
        <FaRegTrashCan className="text-gray-400 hover:text-pink-500" />
      </button>
    </li>
  );
}
