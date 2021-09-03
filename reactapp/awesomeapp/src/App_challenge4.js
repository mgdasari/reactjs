import React from 'react'
//import * as methods from './Methods';
import {Division,Multiplication,Substraction,Addition} from './Methods'

function App(){
  return (
    <React.Fragment>
      <h1>{Addition(5,10)}</h1>
      <h1>{Substraction(51,10)}</h1>
      <h1>{Multiplication(5,10)}</h1>
      <h1>{Division(5,10)}</h1>
    </React.Fragment>)
}

export default App;