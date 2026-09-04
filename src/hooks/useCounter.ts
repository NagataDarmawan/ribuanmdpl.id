"use client";

import { useState, useEffect } from "react";

export function useCounter(targetValue: number, duration: number = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = targetValue;
    if (start === end) return;

    const incrementTime = (duration / end) * 10;
    const timer = setInterval(() => {
      start += Math.ceil(end / 50);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [targetValue, duration]);

  return count;
}