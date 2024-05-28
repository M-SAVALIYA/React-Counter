import React, { useState } from "react";

const App = () => {
  let [count, setcount] = useState(0);

  const [color, setcolor] = useState("red");

  return (
    <div>

      <h1 style={{fontSize:"120px"}}>{count}</h1>

      <button style={{padding:"100px", marginRight:"100px",fontSize:"120px"}} onClick={() => setcount(count - 1)}>-</button>
      <button style={{padding:"100px",fontSize:"120px"}} onClick={() => setcount(count + 1)}>+</button>

           
    </div>
  );
};

export default App;