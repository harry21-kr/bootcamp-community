import TanStackQueryProvider from "./QueryClientProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <TanStackQueryProvider>{children}</TanStackQueryProvider>;
};

export default Providers;
