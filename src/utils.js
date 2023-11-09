import { useRef } from "react";

export function RenderCount() {
  const render = useRef(0);
  return <p>re-renders: {render.current++}</p>;
}
