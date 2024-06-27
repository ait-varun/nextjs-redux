"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import {
  increment,
  decrement,
  incrementByAmount,
} from "@/redux/features/counterSlice";

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.count);

  const handleIncrement = () => {
    // Dispatch the increment action
    dispatch(increment());
  };

  const handleDecrement = () => {
    // Dispatch the decrement action
    dispatch(decrement());
  };

  const handleIncrementByAmount = (amount: number) => {
    // Dispatch the incrementByAmount action
    dispatch(incrementByAmount(amount));
  };

  return (
    <>
      <div className="min-h-screen bg-black flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white mb-4">Counter</h1>
        <span className="text-6xl font-bold text-white mb-8">{count}</span>
        <div className="flex space-x-4">
          <button
            onClick={handleIncrement}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Increment
          </button>
          <button
            onClick={handleDecrement}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Decrement
          </button>
          <button
            onClick={() => handleIncrementByAmount(2)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Increment by 2
          </button>
        </div>
      </div>
    </>
  );
}
