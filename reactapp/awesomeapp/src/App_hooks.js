import React, { useState } from 'react'

// const state = useState();

// console.log(state); //It will throw a error it shoud be called inside the component


// let num = 1;
// function IncNum(){
//     console.log('clicked');
// //Here after clicking also the num value dose not changes. This where state ws used and due to this people used to witch to class component.
// //SO we the help off hooks we can achieve this.

// console.log(num++); //Her on console it work properly but not visible on UI
// }


const App=()=>{
  //  const state = useState();

//    console.log(state); //It will throw a error it shoud be called inside the component
    
    const [num,setNum] = useState(0)
    
    function IncNum(){
        setNum(num+1)
    console.log('clicked');
    }


    return(<React.Fragment>
        <h1 className='heading_style'>{num}</h1>
        <button onClick={IncNum}>click me</button>
    </React.Fragment>)
}

export default App;