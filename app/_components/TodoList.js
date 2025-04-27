import { getTodos } from "../_lib/data-service";
import Todo from "./Todo";

export const revalidate = 0;

export default async function TodoList() {
  const data = await getTodos();

  if (!data.length)
    return (
      <div className="mt-5">
        <p className="px-5 text-gray-500">
          Yaaay you have nothing to do today!!!!
        </p>
      </div>
    );

  return (
    <>
      <ul className="mt-5">
        {data.map((todo) => (
          <Todo key={todo.id} todo={todo} />
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
