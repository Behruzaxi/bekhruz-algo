// import Header from "./component/Header";


// function App() {

//   let name = "Bekhruz"
//   let surname = "Ergashev"
//   let number = "+998-93-112-64-00"
//   let email = "ebehruz846@gmail.com"
  
//   return (
//     <>
    
//       <Header name={name} surname={surname} number={number} email={email}/>

 
//     </>
//   );
// }

// export default App;



import React, { useState } from "react";


export default function App() {
  const [count, setCount] = useState(0); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

  function increment() {
    //setCount(prevCount => prevCount+=1);
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1); 
      } else {
        return (prevCount = 0);
      }
    });
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
