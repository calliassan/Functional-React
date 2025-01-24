import { useEffect, useState } from "react";

export function Debouncestate() {
  const [inputdata, setinputdata] = useState("");
  const [debouncedvalue, setdebouncedvalue] = useState("");

  const handlesearch = (e) => {
    setinputdata(e.target.value);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setdebouncedvalue(inputdata);
    }, 2000);
    return () => clearTimeout(timer);
  }, [inputdata]);
  return (
    <div>
      <h1>Debouncing</h1>
      <input type="text" name="search" onChange={handlesearch} />
      {debouncedvalue}
    </div>
  );
}
