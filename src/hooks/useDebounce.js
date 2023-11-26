
import { useState, useEffect } from "react";

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);//delay만큼 기다린 후 값넣어줌

    return () => {//delay도중 타이핑이 지속되면 celarTimeout 해주면서 delay 재시작
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounceValue;
};
