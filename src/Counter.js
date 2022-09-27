import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);
  const [hidden, setHidden] = useState(false);
  // const [bundle, setBundle] = useState({ "hidden": false, "counter": 0 });
  useEffet(() => {
    console.log("effect!");
    document.title = counter;
  })
  return (
    <React.Fragment>
      {/*<h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Count!</button>*/}
      {hidden ? <h1>Count Hidden</h1> : <h1>{counter}</h1>}

      <button onClick={() => setCounter(counter + 1)}>Count!</button>
      <button onClick={() => setHidden(!hidden)}>Hide/Show</button>
    </React.Fragment>
  )
}

export default Counter;