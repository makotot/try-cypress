import { useState } from 'react';

export default function Home() {
  const [counter, updateCounter] = useState(0);

  return (
    <div>
      <div id="counter">{counter}</div>
      <button
        type="button"
        id="increment"
        onClick={() => updateCounter(counter + 1)}>
        increment
      </button>
      <button
        type="button"
        id="decrement"
        onClick={() => updateCounter(counter - 1)}>
        decrement
      </button>
    </div>
  );
}
