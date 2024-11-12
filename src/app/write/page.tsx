import { write } from "./actions";

const WritePage = () => {
  return (
    <form className="flex flex-col gap-2">
      <input
        id="title"
        name="title"
        type="text"
        required
        className="border border-gray-300 rounded-md px-4 py-2 w-full"
        placeholder="제목을 입력해주세요"
      />
      <textarea
        id="content"
        name="content"
        className="border border-gray-300 rounded-md px-4 py-2 w-full"
        placeholder="내용을 입력해주세요"
      />
      <div className="flex items-center gap-2">
        <button
          formAction={write}
          className="bg-black px-4 py-2 text-white font-bold"
        >
          글쓰기
        </button>
        <button className="border-black border px-4 py-2 font-bold">
          취소하기
        </button>
      </div>
    </form>
  );
};

export default WritePage;
