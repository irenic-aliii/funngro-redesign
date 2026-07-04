"use client";

import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

type Variant = "filled" | "outline" | "ghost";

interface BaseProps {
  variant?: Variant;
  size?: "md" | "lg";
  icon?: LucideIcon;
  showArrow?: boolean;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsLink extends BaseProps {
  href: string;
  onClick?: never;
}

interface ButtonAsButton
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: never;
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantClasses: Record<Variant, string> = {
  filled:
    "bg-mint text-bg shadow-glow hover:bg-mint-bright hover:shadow-glow-lg",
  outline:
    "border border-line-strong text-ink bg-white/[0.02] hover:border-mint hover:bg-mint/10",
  ghost: "text-ink hover:bg-white/5",
};

const sizeClasses = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function Button(props: ButtonProps) {
  const {
    variant = "filled",
    size = "md",
    icon: Icon,
    showArrow = false,
    className = "",
    children,
  } = props;

  const classes = `group relative inline-flex items-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <motion.span
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 24 }}
      className="inline-flex items-center gap-2"
    >
      {Icon && <Icon size={18} strokeWidth={2} />}
      {children}
      {showArrow && (
        <ArrowRight
          size={16}
          strokeWidth={2.2}
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        />
      )}
    </motion.span>
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {content}
      </Link>
    );
  }

  const { onClick, type = "button", ...rest } = props as ButtonAsButton;

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  );
}
