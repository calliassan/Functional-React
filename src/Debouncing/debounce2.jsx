export function Debounce2() {
  const debouncefn = (fn, timer) => {
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
      <input
        type="text"
        placeholder="type here"
        onChange={debouncefn(handlechange, 1000)}
      />
    </div>
  );
}
