import React, { useState } from 'react'

const App=()=>{
    let time = new Date().toLocaleTimeString()
    const [cTime,setCTime] = useState(time)
    setInterval(()=>{
        time=new Date().toLocaleTimeString()
        setCTime(time)
    },1000);
    return (<h1 className='heading_style'>{cTime}</h1>);
}


export default App;