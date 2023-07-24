import React from "react";

import Skeleton from "@/components/common/Skeleton/Skeleton";

import s from "./ProgressLineSkeleton.module.scss";

interface ProgressLineSkeleton {
  length: number;
}

const ProgressLineSkeleton: React.FC<ProgressLineSkeleton> = ({ length }) => {
  const skeletonArray = new Array(length).fill(null);

  return (
    <div className={s.header}>
      {skeletonArray.map((_, index) => (
        <React.Fragment key={index}>
          {!!index && <div className={s.progressLine}></div>}
          <Skeleton className={s.skeleton} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressLineSkeleton;
