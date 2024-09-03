import { Tables } from "@/types/supabase";
import { createClient } from "@/utils/supabase/server";

export const getPostById = async (id: string) => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("post_id", id);

  if (error) throw new Error(error.message);

  return data as Tables<"posts">[];
};
