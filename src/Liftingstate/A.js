import { useState } from "react";

export function A({ handlechange }) {
  return (
    <div>
      <input type="text" onChange={(e) => handlechange(e.target.value)} />
    </div>
  );
}
