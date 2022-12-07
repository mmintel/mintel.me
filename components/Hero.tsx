import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";

export const Hero: React.FC<
  {
    title?: ReactNode;
    subline?: ReactNode;
    text?: ReactNode;
  } & HTMLAttributes<HTMLDivElement>
> = ({ subline, text, title, className }) => {
  return (
    <div className={clsx("text-center", className)}>
      {subline && (
        <h2 className="text-lg font-semibold text-blue-light-500 dark:text-blue-dark-500">
          {subline}
        </h2>
      )}
      {title && (
        <h1 className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          {title}
        </h1>
      )}
      {text && (
        <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">{text}</p>
      )}
    </div>
  );
};
