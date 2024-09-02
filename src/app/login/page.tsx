import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <div className="flex justify-center gap-12">
      <section className="flex flex-col justify-center items-center gap-2 p-4">
        <h2 className="text-2xl font-bold">나우캠프 회원가입</h2>
        <p className="text-lg text-gray-400">
          회원가입하고 다른 수강생들과 의견을 나누어보세요!
        </p>
        <p className="underline">
          나우캠프는 1557명의 수강생분들과 함께하고있어요.
        </p>
      </section>
      <form className="flex flex-col gap-4 p-4 max-w-[375px] w-full">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm text-gray-400">
            이메일
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-sm text-gray-400">
            비밀번호
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="border border-gray-300 rounded-md px-4 py-2"
          />
        </div>
        <div className="flex justify-center items-center gap-2">
          <button
            formAction={login}
            className="bg-black px-4 py-2 text-white font-bold"
          >
            로그인
          </button>
          <button
            formAction={signup}
            className="px-4 py-2 border border-gray-400 font-bold"
          >
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
}
