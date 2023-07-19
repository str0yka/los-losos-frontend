import React from "react";
import classNames from "classnames";

import s from "./Container.module.scss";

interface ContainerProps {
  children: React.ReactNode;
  width?: "narrow" | "medium" | "wide";
}

const Container: React.FC<ContainerProps> = ({ children, width = "wide" }) => {
  const classes = classNames(s.container, {
    [s.narrow]: width === "narrow",
    [s.medium]: width === "medium",
    [s.wide]: width === "wide",
  });

  return <div className={classes}>{children}</div>;
};

export default Container;
