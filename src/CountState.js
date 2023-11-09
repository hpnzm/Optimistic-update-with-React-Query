import { useState } from "react";
import { RenderCount } from "./utils";

export function CountState() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Change me!");
  return (
    <div>
      <h1>useState</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>inc</button>
      <h1>{text}</h1>
      <input value={text} onChange={(e) => setText(e.currentTarget.value)} />
      <RenderCount />
    </div>
  );
}
