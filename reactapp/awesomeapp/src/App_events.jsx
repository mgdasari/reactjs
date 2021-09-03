import React, { useState } from 'react'

const App=()=>{
    const [bg,setBg]=useState('blue')
    const [name,setName]=useState('click me');
    const myFunction = ()=>{console.log('clicked')
    setBg('purple');
    setName('oouch!! 😛')

}
        const myFunction2=()=>{
            setBg('blue')
            setName('click me')
        }
    return(
        
            <div style={{backgroundColor:bg}}>
                <button onClick={myFunction} onDoubleClick={myFunction2}>{name}</button>
            </div>
        
    );
}

export default App;