const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center">{children}</div>
  );
};

export default LoginLayout;
