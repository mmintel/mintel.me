import { PropsWithChildren } from "react";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="my-4 md:my-8">{children}</div>;
};
