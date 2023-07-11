import React from "react";
import styles from "./RoundedButton.module.scss";

interface RoundedButtonInterface {
  children: JSX.Element | string;
  fillColor?: boolean;
  className?: string;
  props?: any;
}

const RoundedButton: React.FC<RoundedButtonInterface> = ({
  children,
  fillColor,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${styles.button} ${
        fillColor && styles.fillButton
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default RoundedButton;
