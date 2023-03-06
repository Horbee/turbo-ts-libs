import { useState } from 'react'

export const useCounter = (intial: number, step: number = 1) => {
  const [count, setCount] = useState(intial);

  const add = () => setCount((c) => c + step);

  return {
    count,
    add,
  };
};
