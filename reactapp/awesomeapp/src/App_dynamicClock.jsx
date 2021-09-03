import React, { useState } from "react";

const App = () => {

  let newTime = new Date().toTimeString();

  const [cTime,setCTime]=useState(newTime);

  function getDate() {
    let newCTime = new Date().toTimeString();
     setCTime(newCTime)
  }

  return (
    <React.Fragment>
      <h1 className='heading_style'>{cTime}</h1>
      <button onClick={getDate}>Get Time</button>
    </React.Fragment>
  );
};

export default App;
