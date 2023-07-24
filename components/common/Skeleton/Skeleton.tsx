import React from "react";
import classes from "classnames";

import s from "./Skeleton.module.scss";

interface SkeletonProps {
  className?: string;
  children?: React.ReactNode;
}

const Skeleton: React.FC<SkeletonProps> = ({ className, children }) => {
  const skeletonClassName = classes(s.skeleton, className);

  return <div className={skeletonClassName}>{children}</div>;
};

export default Skeleton;
