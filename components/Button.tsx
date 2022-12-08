import clsx from "clsx";
import { PropsWithChildren, HTMLAttributes } from "react";

export const Button: React.FC<
  PropsWithChildren & HTMLAttributes<HTMLButtonElement>
> = ({ className, children, ...props }) => (
  <button
    className={clsx(
      className,
      "inline-flex items-center rounded-2xl border border-transparent bg-blue-light-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-light-600 focus:outline-none focus:ring-2 focus:ring-blue-light-500 focus:ring-offset-2"
    )}
    {...props}
  >
    {children}
  </button>
);
