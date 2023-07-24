import React from "react";
import classes from "classnames";

import s from "./Skeleton.module.scss";

interface SkeletonProps {
  className: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  const skeletonClassName = classes(s.skeleton, className);

  return <div className={skeletonClassName}></div>;
};

export default Skeleton;
