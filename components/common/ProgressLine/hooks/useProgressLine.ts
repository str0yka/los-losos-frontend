import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { ProgressProps } from "./../ProgressLine";

export const useProgressLine = (
  buttons: Array<{ path: string; name: string }>
) => {
  const pathname = usePathname();
  const [progressButtonsProps, setProgressButtonsProps] = useState<
    null | ProgressProps[]
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

  // TODO: тут надо проверить, если возвращается null, то вернуть скелетон

  return progressButtonsProps;
};
