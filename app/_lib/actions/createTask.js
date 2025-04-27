"use server";

import { revalidatePath } from "next/cache";
import { supabase } from "../supabase";

export async function createTask(formData) {
  const task = formData.get("task");

  const { data, error } = await supabase
    .from("todo")
    .insert([{ task: task }])
    .select();

  if (error) {
    throw new Error("Error creating task");
  }

  revalidatePath("/");

  return data;
}
