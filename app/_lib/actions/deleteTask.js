"use server";

import { supabase } from "../supabase";
import { revalidatePath } from "next/cache";

export async function deleteTask(taskId) {
  const { error } = await supabase.from("todo").delete().eq("id", taskId);

  if (error) {
    console.log("Error deleting task:", error);
    return { error };
  }

  // re-render the home page so the deleted task disappears immediately
  revalidatePath("/");

  return { success: true };
}
