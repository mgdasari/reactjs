import React from 'react'
import ReactDOM from 'react-dom'

const d = new Date();

ReactDOM.render(
    <React.Fragment>

    <h1>My name is Mukund Dasari</h1>  
    <p>Current Date  is {`${d.toLocaleDateString()}`}</p>
    <p>Current time is {`${d.toLocaleTimeString()}`}</p>
    </React.Fragment>
    
    
    ,document.getElementById('root'));