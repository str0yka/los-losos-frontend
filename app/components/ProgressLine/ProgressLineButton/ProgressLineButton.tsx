import React from "react";

import Button from "@/app/components/common/Button/Button";

export interface ProgressLineButtonProps {
  path: string;
  name: string;
  currentOrPrevious: boolean;
}

const ProgressLineButton: React.FC<ProgressLineButtonProps> = ({
  path,
  name,
  currentOrPrevious = false,
}) => {
  return currentOrPrevious ? (
    <Button variant="contained" href={path}>
      {name}
    </Button>
  ) : (
    <Button variant="outlined-secondary" hover={false}>
      {name}
    </Button>
  );
};

export default ProgressLineButton;
