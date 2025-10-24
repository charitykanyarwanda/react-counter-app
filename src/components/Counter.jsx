import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center p-6">
      <h1 className="text-3xl mb-4">Counter: {count}</h1>
      <div className="space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
