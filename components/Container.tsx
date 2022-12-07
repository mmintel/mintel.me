import { PropsWithChildren } from "react";

export const Container: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="container mx-auto px-2 sm:px-6 lg:px-8">{children}</div>
);
