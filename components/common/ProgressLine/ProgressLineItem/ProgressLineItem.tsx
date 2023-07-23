import React from "react";

import Button from "@/components/common/Button/Button";
import { ProgressProps } from "@/components/common/ProgressLine/ProgressLine";

interface ProgressLineItemProps {
  progress: ProgressProps;
}

const ProgressLineItem: React.FC<ProgressLineItemProps> = ({
  progress: { path, name, currentOrPrevious },
}) => {
  return currentOrPrevious ? (
    <Button
      key={path}
      variant="contained"
      textVariant="capitalize-first-latter"
      href={path}
    >
      {name}
    </Button>
  ) : (
    <Button
      key={path}
      variant="outlined-secondary"
      textVariant="capitalize-first-latter"
      hover={false}
    >
      {name}
    </Button>
  );
};

export default ProgressLineItem;
