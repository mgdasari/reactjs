import React, { useState } from 'react'


const App=()=>{
    const [name,setname]=useState('');
    const [fullname,setfullname]=useState();
    
    
    const input=(event)=>{
    console.log('input data: ' + event.target.value);
    setname(event.target.value)
    
}

const submitData=()=>{
    setfullname(name);
}
    return(
        <React.Fragment>
        <h1 className='heading_style'>Hello!! {fullname}</h1>
        <input type='text' placeholder='Enter Your FName' className='textField' onChange={input} value={name}/>
        <br/>
        <input type='text' placeholder='Enter Your LName' className='textField' onChange={inputSecond} value={lname}/>
        <button onClick={submitData}>Click Me 🙂</button>
        </React.Fragment>
    );
}


export default App;