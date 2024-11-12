"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function write(formData: FormData) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    const data = {
      post_user_id: user.id,
      post_title: formData.get("title") as string,
      post_content: formData.get("content") as string,
    };

    const { data: postData, error } = await supabase
      .from("posts")
      .insert(data)
      .select();

    if (error) {
      throw new Error(error.message);
    }

    redirect(`/post/${postData[0].post_id}`);
  }
}
