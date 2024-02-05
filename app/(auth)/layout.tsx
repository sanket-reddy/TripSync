import React, { Children } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-center min-h-screen w-full bg-black">{children}</div>
  );
};
export default Layout;
