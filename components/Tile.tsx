import clsx from "clsx";
import { PropsWithChildren, HTMLAttributes } from "react";

interface Comp {
  Content: typeof TileContent;
}

export const Tile: Comp &
  React.FC<
    PropsWithChildren & HTMLAttributes<HTMLDivElement> & { background?: string }
  > = ({ className, children, background = "bg-gray-light-300", ...props }) => (
  <div
    className={clsx(className, background, "rounded-2xl overflow-hidden")}
    {...props}
  >
    {children}
  </div>
);

export const TileContent: React.FC<
  PropsWithChildren & HTMLAttributes<HTMLDivElement>
> = ({ className, children, ...props }) => (
  <div className={clsx(className, "p-4 md:p-8")} {...props}>
    {children}
  </div>
);

Tile.Content = TileContent;
TileContent.displayName = "Tile.Content";
