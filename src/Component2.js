import React, { useState } from "react";

const Component2 = () => {
  const [stateCounter, setCounter] = useState({
    counter: 0,
  });

  const submit = () => {
    setCounter({
      counter: stateCounter.counter - 1,
    });
  };

  return (
    <div>
      {stateCounter.counter}
      <h1>This is function based component</h1>

      <br />
      <input type="button" onClick={submit} value="Sumbit" />
    </div>
  );
};

export default Component2;
