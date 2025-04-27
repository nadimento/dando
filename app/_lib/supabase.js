import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ihpynnheqgphpglgldbi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlocHlubmhlcWdwaHBnbGdsZGJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU3MTg2NTksImV4cCI6MjA2MTI5NDY1OX0.vNKh1vcCPL0GxI9igmmuYmCH4dBYnjBvxTxaVCT13uM";

export const supabase = createClient(supabaseUrl, supabaseKey);
