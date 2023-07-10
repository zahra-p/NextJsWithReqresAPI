import { twMerge } from "tailwind-merge";
import { ITitleProps } from "./types";

function CardTitle({ children, className }: ITitleProps) {
  return <h2 className={twMerge("text-base font-bold", className)}>{children}</h2>;
}
export default CardTitle;
