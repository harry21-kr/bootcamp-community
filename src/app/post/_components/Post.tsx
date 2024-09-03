"use client";

import { getPostById } from "@/api/post";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

interface PostProps {
  id: string;
}

const Post = ({ id }: PostProps) => {
  const { data } = useQuery({
    queryKey: ["post"],
    queryFn: async () => await getPostById(id),
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <div>Post</div>;
};

export default Post;
