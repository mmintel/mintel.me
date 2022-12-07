import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren } from "react";

export const Avatar: React.FC<
  PropsWithChildren & HTMLAttributes<HTMLDivElement>
> = ({ className, children }) => (
  <div className={clsx("h-20 w-20 rounded-full overflow-hidden", className)}>
    {children}
  </div>
);
