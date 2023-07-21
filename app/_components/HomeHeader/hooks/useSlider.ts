import { useEffect, useRef } from "react";

export const useSlider = () => {
  const slider = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    let isDraggable = false;
    let dragStartPosition = 0;
    let dragEndPosition = 0;
    let percentOfScrollWidth = slider.current
      ? slider.current.scrollWidth / window.innerWidth
      : 1;

    const onDragStart = (event: globalThis.MouseEvent) => {
      if (!slider.current) return;

      isDraggable = true;
      dragStartPosition = event.clientX * percentOfScrollWidth;
    };

    const onDragEnd = () => {
      if (!slider.current) return;
      isDraggable = false;
      dragEndPosition = slider.current.scrollLeft;
    };

    const onDrag = (event: globalThis.MouseEvent) => {
      if (!isDraggable || !slider.current) return;

      slider.current.scrollLeft =
        dragEndPosition +
        dragStartPosition -
        event.clientX * percentOfScrollWidth;
    };

    slider.current?.addEventListener("mousedown", onDragStart);
    window.addEventListener("mouseup", onDragEnd);
    window.addEventListener("mousemove", onDrag);

    return () => {
      slider.current?.removeEventListener("mousedown", onDragStart);
      window.removeEventListener("mouseup", onDragEnd);
      window.removeEventListener("mousemove", onDrag);
    };
  }, []);

  return slider;
};
