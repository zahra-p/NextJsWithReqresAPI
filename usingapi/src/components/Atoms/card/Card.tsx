import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={twMerge("w-full rounded-lg bg-white p-6 shadow-content", className)}>{children}</div>;
}

Card.defaultProps = {
  className: ""
};

export default Card;
