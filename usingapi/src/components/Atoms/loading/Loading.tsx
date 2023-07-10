import React from "react";
import { twMerge } from "tailwind-merge";
import styles from "./Loading.module.scss";

const sizes = {
  sm: "h-8 w-8 border-2 border-t-2",
  md: "h-12 w-12",
  lg: "h-16 w-16"
};

function Loading({ className, size = "md" }: { className?: string; size?: keyof typeof sizes }) {
  return <div className={twMerge(styles.loading, sizes[size], className)} />;
}

Loading.defaultProps = {
  className: "",
  size: "md"
};

export default Loading;
