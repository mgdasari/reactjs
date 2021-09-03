import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

//Below is hard coded.
// ReactDOM.render(
//     <React.Fragment>
//         <h1>My name is mukund</h1>
//         <p> This is my world.</p>
//         <ol>
//             <li>mukund</li>
//             <li>dasari</li>
//             <li>govindu</li>
//             <li>hanumanta</li>
//         </ol>
//     </React.Fragment>
// ,
// document.getElementById('root')

// );

/**
 * Now what will do is we create component of each and use it in index.js file.
 */

ReactDOM.render(<App/>,document.getElementById('root'));