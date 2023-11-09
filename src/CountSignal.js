import { signal } from "@preact/signals-react";
import { RenderCount } from "./utils";

const count = signal(0);
const text = signal("Change me");

export function CountSignal() {
  return (
    <div>
      <h1>Signal</h1>
      <h1>{count}</h1>
      <button onClick={() => count.value++}>inc</button>
      <h1>{text}</h1>
      <InputValue />
      <RenderCount />
    </div>
  );
}

function InputValue() {
  return (
    <input
      value={text.value}
      onChange={(e) => (text.value = e.currentTarget.value)}
    />
  );
}
