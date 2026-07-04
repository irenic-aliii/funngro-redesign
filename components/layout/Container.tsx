import { createElement, HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: "div" | "section" | "header" | "footer" | "nav" | "article";
}

export default function Container({
  as = "div",
  className = "",
  children,
  ...props
}: ContainerProps) {
  return createElement(
    as,
    { className: `mx-auto w-full max-w-container px-6 md:px-10 ${className}`, ...props },
    children
  );
}
