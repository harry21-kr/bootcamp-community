import React from "react";

const MyPageLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="py-24">{children}</div>;
};

export default MyPageLayout;
