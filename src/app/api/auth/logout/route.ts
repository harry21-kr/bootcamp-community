import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const supabase = createClient();

  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);

  return NextResponse.json({
    message: "성공적으로 로그아웃되었습니다!",
    status: 200,
  });
}
