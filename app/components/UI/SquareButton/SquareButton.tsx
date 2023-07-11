import React from "react";
import styles from "./SquareButton.module.scss";

interface SquareButtonInterface {
  children: string;
  size?: "small" | "medium" | "large";
  isPointer?: boolean;
  className?: string;
}

const SquareButton: React.FC<SquareButtonInterface> = ({
  children,
  size = "small",
  isPointer = true,
  className,
}) => {
  let paddingY: number = size === "small" ? 10 : size === "medium" ? 13 : 15;
  children = children[0].toUpperCase() + children.slice(1, children.length);

  return (
    <button
      className={`${styles.button} ${className}`}
      style={{
        paddingTop: paddingY,
        paddingBottom: paddingY,
        cursor: isPointer ? "pointer" : "default",
      }}
    >
      {children}
    </button>
  );
};

export default SquareButton;
