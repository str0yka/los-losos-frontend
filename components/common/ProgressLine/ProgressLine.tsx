"use client";

import React from "react";
import classes from "classnames";

import ProgressLineButton from "@/components/common/ProgressLine/ProgressLineItem/ProgressLineItem";
import { useProgressLine } from "./hooks";

import s from "./ProgressLine.module.scss";
import ProgressLineSkeleton from "@/components/common/ProgressLine/ProgressLineSkeleton/ProgressLineSkeleton";

export interface ProgressProps {
  path: string;
  name: string;
  currentOrPrevious: boolean;
}

interface ProgressLineProps {
  progress: { path: string; name: string }[];
}

const ProgressLine: React.FC<ProgressLineProps> = ({ progress }) => {
  const progressItems = useProgressLine(progress);
  const progressLineClassName = (currentOrPrevious: boolean) =>
    classes({ [s.progressLine]: true, [s.previous]: currentOrPrevious });

  if (!progressItems) return <ProgressLineSkeleton length={progress.length} />;

  return (
    <div className={s.header}>
      {progressItems?.map((progress, index) => (
        <React.Fragment key={progress.path}>
          {!!index && (
            <div
              className={progressLineClassName(progress.currentOrPrevious)}
            ></div>
          )}
          <ProgressLineButton progress={progress} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressLine;
