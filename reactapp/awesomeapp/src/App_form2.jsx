import React, { useState } from 'react'

const App =()=>{
    const [name,setName] = useState('');
    const[fullname,setfullname]=useState();
    const [lname,setlname]=useState();
    const [fulllname,setfulllname]=useState();
    const inputFunction=(event)=>{
        console.log(event.target.value)
        setName(event.target.value);
    }

    const inputSecond=()=>{
        setlname(event.target.value);

    }
    const onSubmits=(event)=>{
        event.preventDefault();
        setfullname(name)
        setfulllname(lname)

    }
    return(
        <React.Fragment>
            <form onSubmit={onSubmits}>
            <h1 className='heading_style'>Hello!! {fullname} {fulllname}</h1>
            <input type='text' placeholder='Enter your name' className='textField' onChange={inputFunction} value={name}/><br/>
            <input type='text' placeholder='Enter Your LName' className='textField' onChange={inputSecond} value={lname}/>
            <button type='submit'>submit me </button>
            </form>
        </React.Fragment>
    )
}

export default App;