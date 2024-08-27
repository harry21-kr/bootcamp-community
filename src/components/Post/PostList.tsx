import PostItem from "./PostItem";

const PostList = () => {
  return (
    <ul className="flex flex-col gap-2">
      {Array.from({ length: 8 }).map((_, idx) => (
        <PostItem key={idx} />
      ))}
    </ul>
  );
};

export default PostList;
