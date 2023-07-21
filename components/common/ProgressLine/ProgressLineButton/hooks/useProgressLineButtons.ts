import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { ProgressLineButtonProps } from "@/components/common/ProgressLine/ProgressLineButton/ProgressLineButton";

export const useProgressLineButtons = (
  buttons: Array<{ path: string; name: string }>
) => {
  const pathname = usePathname();
  const [progressButtonsProps, setProgressButtonsProps] = useState<
    null | ProgressLineButtonProps[]
  >(null);

  useEffect(() => {
    const pathnameIndex = buttons.findIndex(
      (button) => button.path === pathname
    );

    setProgressButtonsProps(
      buttons.map(({ path, name }, index) => {
        if (pathnameIndex >= index) {
          return { path, name, currentOrPrevious: true };
        } else {
          return { path, name, currentOrPrevious: false };
        }
      })
    );
  }, [pathname]);

  return progressButtonsProps;
};
