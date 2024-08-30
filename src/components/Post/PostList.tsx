import PostHeader from "./PostHeader";
import PostItem from "./PostItem";

const PostList = () => {
  return (
    <>
      <PostHeader title="지금 핫한 글 🔥" />
      <ul className="flex flex-col gap-2">
        {Array.from({ length: 8 }).map((_, idx) => (
          <PostItem key={idx} />
        ))}
      </ul>
    </>
  );
};

export default PostList;
