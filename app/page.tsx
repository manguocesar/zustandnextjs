'use client';

import { useEffect, useState } from "react";
import { useCounterStore, useTextStore } from "./store";

const setStates = () => {
  useCounterStore.setState({ count: 1 });
  useTextStore.setState({ text: "base" });
};

const App = () => {
  const count = useCounterStore((state) => state.count);
  const text = useTextStore((state) => state.text);

  return <OtherComponent count={count} text={text} />;
};

const OtherComponent = ({ count, text }: { count: number, text:string }) => {
  
  const increment = useCounterStore((state) => state.increment);
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const decrement = useCounterStore((state) => state.decrement);
  const add = useTextStore((state) => state.add);

  const [typpedText, setTyppedText] = useState<string>("");

  useEffect(() => {
    setStates();
  }, []);

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setTyppedText(e.target.value);
    // add(e.target.value);
  }



  return (
    <div className="flex flex-col  items-center justify-center h-screen">
      <div>
        {count}
        <div className="flex flex-col border-2 border-white p-4 m-2 hover:opacity-70">
          <button onClick={increment}>Increment </button>
          <button onClick={incrementAsync}>Increment Async w/ setTimeout 1s</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      </div>
      <div>
        {text}
        <div className="flex flex-col border-2 text-black border-white p-4 m-2">
          <button onClick={add}>Increment </button>
          <input type="text" value={typpedText} onChange={(e)=> handleClick(e)} />
        </div>
      </div>
    </div>
  );
};

export default App;