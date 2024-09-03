"use client";

import { useEffect } from "react";

const PostPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/post/${id}`);
      const post = await res.json();
      console.log(post);
    })();
  }, [id]);

  return <div>{id}</div>;
};

export default PostPage;
