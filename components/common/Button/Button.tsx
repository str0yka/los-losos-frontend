import React, { ComponentProps } from "react";
import Link from "next/link";
import classNames from "classnames";

import s from "./Button.module.scss";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "contained" | "outlined" | "outlined-secondary";
  textVariant?:
    | "uppercase"
    | "lowercase"
    | "capitalize"
    | "capitalize-first-latter";
  size?: "small" | "medium" | "large";
  rounded?: boolean;
  hover?: boolean;
  href?: string;
  className?: string;
  children?: React.ReactNode;
  buttonProps?: ComponentProps<"button">;
}

const Button: React.FC<ButtonProps> = ({
  variant = "outlined",
  textVariant = "uppercase",
  size = "small",
  rounded = false,
  hover = true,
  href,
  className,
  children,
  ...buttonProps
}) => {
  const classes = classNames(s.button, className, {
    [s.contained]: variant === "contained",
    [s.outlined]: variant === "outlined",
    [s.outlinedSecondary]: variant === "outlined-secondary",
    [s.uppercase]: textVariant === "uppercase",
    [s.lowercase]: textVariant === "lowercase",
    [s.capitalize]: textVariant === "capitalize",
    [s.small]: size === "small",
    [s.medium]: size === "medium",
    [s.large]: size === "large",
    [s.rounded]: rounded,
    [s.square]: !rounded,
    [s.hover]: hover,
  });

  if (
    textVariant === "capitalize-first-latter" &&
    typeof children === "string"
  ) {
    children.charAt(0);
  }

  return href ? (
    <Link href={href}>
      <button className={classes} {...buttonProps}>
        {children}
      </button>
    </Link>
  ) : (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
