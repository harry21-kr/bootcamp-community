import { getPostById } from "@/api/post";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const post = await getPostById(id);

  return NextResponse.json(post);
}
