import React from 'react'
import ReactDOM from 'react-dom'

const fname='mukund';
const lname='dasari';


ReactDOM.render(
    <React.Fragment>
        <h1>{`hi my  name ${fname} ${lname}`}</h1>
        <h2>{`first name is ${fname}`}</h2>
        <h3>{`last name is ${lname}`}</h3>
        <h4>{`The avaerage is ${5+5}`}</h4>
        
    </React.Fragment>
    ,
    document.getElementById('root')
  );