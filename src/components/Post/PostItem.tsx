const PostItem = () => {
  return (
    <li className="flex items-center">
      <h3 className="text-gray-400 mr-4 border px-2 py-1 border-gray-300 text-sm">
        카테고리
      </h3>
      <h3 className="font-semibold mr-24">글 제목</h3>
      <p className="mr-4 text-sm text-gray-400">좋아요</p>
      <p className="text-sm text-gray-400">댓글</p>
    </li>
  );
};

export default PostItem;
