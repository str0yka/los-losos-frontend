import React from "react";
import styles from "./RoundedButton.module.scss";
import classes from "classnames";

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
  const classNames = classes(
    styles.button,
    fillColor && styles.fillButton,
    className
  );

  return (
    <button {...props} className={classNames}>
      {children}
    </button>
  );
};

export default RoundedButton;
