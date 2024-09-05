"use client";

import { getPostById } from "@/api/post";
import { useQuery } from "@tanstack/react-query";

interface PostProps {
  id: string;
}

const Post = ({ id }: PostProps) => {
  const { data: post } = useQuery({
    queryKey: ["post"],
    queryFn: async () => await getPostById(id),
  });

  const { post_content, post_title } = post![0];

  return (
    <div>
      <h2 className="text-3xl font-bold">{post_title}</h2>
      <p>{post_content}</p>
    </div>
  );
};

export default Post;
