import Image from "next/image";
import TodoList from "./_components/TodoList";
import Logo from "./_components/Logo";
import { createTask } from "./_lib/actions/createTask";

export default function Home() {
  return (
    <div className="mx-auto mt-5 max-w-2xl px-5">
      <Logo />

      <form action={createTask} className="mt-5">
        <input
          name="task"
          type="text"
          placeholder="Enter your task"
          // className="mt-6 w-full rounded-md border-0 bg-gray-100 px-4 py-3 pr-12 text-base text-gray-900 placeholder-gray-500 transition-all duration-200 focus:ring-2 focus:ring-blue-500"
          className="mt-1 block w-full rounded-xl border-2 border-red-300 bg-rose-50 px-4 py-3 text-rose-400 shadow-sm placeholder:text-rose-400 focus:border-rose-500 focus:ring-0 focus:outline-none"
        />
        <button className="transitionhover:bg-rose-700 mt-2 w-full cursor-pointer rounded-xl bg-rose-600 px-4 py-3 font-medium text-white">
          Add Task
        </button>
      </form>

      <TodoList />
    </div>
  );
}
