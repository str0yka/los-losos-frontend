import React, { ComponentProps } from "react";
import Link from "next/link";

import s from "./Button.module.scss";
import classNames from "classnames";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "contained" | "outlined" | "outlined-secondary";
  size?: "small" | "medium" | "large";
  rounded?: boolean;
  hover?: boolean;
  href?: string;
  className?: string;
  children: React.ReactNode;
  buttonProps?: ComponentProps<"button">;
}

const Button: React.FC<ButtonProps> = ({
  variant = "outlined",
  size = "small",
  rounded = false,
  hover = true,
  href,
  className,
  children,
  ...buttonProps
}) => {
  const buttonVariant =
    variant === "contained"
      ? s.contained
      : variant === "outlined"
      ? s.outlined
      : s.outlinedSecondary;
  const buttonSize =
    size === "small" ? s.small : size === "medium" ? s.medium : s.large;
  const buttonRounded = rounded ? s.rounded : s.square;
  const buttonHover = hover && s.hover;
  const buttonDefaultClassName = s.button;

  const classes = classNames(
    buttonVariant,
    buttonSize,
    buttonRounded,
    buttonHover,
    buttonDefaultClassName,
    className
  );

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
