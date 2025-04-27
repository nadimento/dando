"use server";

import { revalidatePath } from "next/cache";
import { supabase } from "../supabase";

export async function completeTask(taskId) {
  // 1. Fetch the current `completed` value for this task
  const { data: task, error: fetchError } = await supabase
    .from("todo")
    .select("completed")
    .eq("id", taskId)
    .single();

  if (fetchError) {
    console.error("Error fetching task:", fetchError);
    return { error: fetchError };
  }

  // 2. Invert the boolean
  const newCompleted = !task.completed;

  // 3. Update the row with the toggled value
  const { error: updateError } = await supabase
    .from("todo")
    .update({ completed: newCompleted })
    .eq("id", taskId);

  if (updateError) {
    console.error("Error updating task:", updateError);
    return { error: updateError };
  }

  // 4. Re-render the page so the UI reflects the change immediately
  revalidatePath("/");

  return { success: true };
}
