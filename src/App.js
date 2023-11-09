import { useState } from "react";
import { CountSignal } from "./CountSignal";
import { CountState } from "./CountState";
import { PostOne } from "./TestOne";
import { PostTwo } from "./TestTwo";
import "./styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CountSignalHook } from "./CountSignalHook";

const queryClient = new QueryClient();

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={() => setShow(!show)}>toogle show</button>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <PostOne />
          <PostTwo />
          {show && <CountState />}
          {show && <CountSignal />}
          {show && <CountSignalHook />}
        </div>
      </div>
    </QueryClientProvider>
  );
}
