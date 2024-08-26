const Footer = () => {
  return (
    <footer className="py-5 border-t border-gray-500 text-gray-500 flex justify-center">
      <div className="max-w-[1224px] w-full flex flex-col gap-4">
        <div className="flex gap-4">
          <p>서비스 소개</p>
          <p>이용약관</p>
          <p>개인정보 처리방침</p>
          <p>신고가이드</p>
        </div>
        <p>© 2024 nowCamp</p>
      </div>
    </footer>
  );
};

export default Footer;
