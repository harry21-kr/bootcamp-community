"use client";

import { useRouter } from "next/navigation";

const MyPage = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const res = await fetch("/api/auth/logout");
    const data = await res.json();
    if (data.status === 200) router.push("/");
  };

  return (
    <div>
      <button
        onClick={handleLogout}
        className="bg-black px-4 py-2 text-white font-bold"
      >
        로그아웃
      </button>
    </div>
  );
};

export default MyPage;
