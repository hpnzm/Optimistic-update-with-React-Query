import { useSignal } from "@preact/signals-react";
import { RenderCount } from "./utils";

export function CountSignalHook() {
  const count = useSignal(0);
  const text = useSignal("Change me!");
  return (
    <div>
      <h1>Signal hook</h1>
      <h1>{count}</h1>
      <button onClick={() => count.value++}>inc</button>
      <h1>{text}</h1>
      <Input text={text} />
      <RenderCount />
    </div>
  );
}

function Input({ text }) {
  return (
    <input
      value={text}
      onChange={(e) => (text.value = e.currentTarget.value)}
    />
  );
}
