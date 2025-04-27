import { supabase } from "./supabase";

export async function getTodos() {
  const { data, error } = await supabase
    .from("todo")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    throw new Error("Error fetching todos");
  }

  return data;
}
