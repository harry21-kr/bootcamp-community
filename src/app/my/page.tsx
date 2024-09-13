import { logout } from "./actions";

const MyPage = () => {
  return (
    <form>
      <button
        formAction={logout}
        className="bg-black px-4 py-2 text-white font-bold"
      >
        로그아웃
      </button>
    </form>
  );
};

export default MyPage;
