interface PostHeaderProps {
  title: string;
}

const PostHeader = ({ title }: PostHeaderProps) => {
  return (
    <div className="border-b border-b-gray-400 py-4 px-2 mb-4 text-2xl font-bold">
      <h2>{title}</h2>
    </div>
  );
};

export default PostHeader;
