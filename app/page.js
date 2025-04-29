import Logo from "./_components/Logo";
import TodoForm from "./_components/TodoForm";
import TodoList from "./_components/TodoList";
import { getTodos } from "./_lib/data-service";

export const revalidate = 0;

export default async function Home() {
  const data = await getTodos();

  return <TodoForm data={data} />;
}
