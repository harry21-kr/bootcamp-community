import { getPostById } from "@/api/post";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Post from "../_components/Post";

const PostPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const post = await getPostById(id);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["post"],
    initialData: post,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Post id={id} />
    </HydrationBoundary>
  );
};

export default PostPage;
