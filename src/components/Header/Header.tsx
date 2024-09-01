import { getUserData } from "@/api/auth";
import Link from "next/link";

const Header = async () => {
  const userData = await getUserData();

  return (
    <header className="fixed top-0 left-0 flex justify-center w-full bg-white z-50 border-b border-gray-500">
      <div className="max-w-[1224px] w-full h-20 text-3xl font-bold flex justify-between items-center">
        <h1>nowCamp</h1>
        <div className="flex items-center gap-3 text-lg">
          <button className="bg-black text-white px-5 py-2">글쓰기</button>
          <Link
            href={userData.user ? "/my" : "/login"}
            className="border px-5 py-2"
          >
            {userData?.user?.email ?? "로그인"}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
