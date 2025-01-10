import { useState } from "react";

export function Debounce() {
  const debouncechange = (fn, timer = 500) => {
    console.log(fn);
    let timerId;
    return function (...args) {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        fn(...args);
      }, timer);
    };
  };
  const handlechange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={debouncechange(handlechange, 2000)} />
    </div>
  );
}
