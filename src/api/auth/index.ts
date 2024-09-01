import { createClient } from "@/utils/supabase/server";

export const getUserData = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data;
};
