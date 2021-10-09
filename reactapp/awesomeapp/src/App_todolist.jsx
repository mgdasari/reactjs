import React, { useState } from 'react'

const App =()=>{
  const [inputList,setInputList] = useState("");
  const [items,setItems] = useState([]);
  const inputEvent =(event)=>{
    setInputList(event.target.value)
  }

  const listOfItem =()=>{
    setItems((oldValues)=>{
      return [...oldValues,inputList];
    })
    setInputList('')

  }

  return(
    <React.Fragment>
      <div className='main_div'>
        <div className='center_div'>
        <br/>
        <h1>ToDo List</h1>
        <br/>
        <input type='text' placeholder='Add a Items' onChange={inputEvent} value={inputList}/>
        <button onClick={listOfItem}> + </button>
        <ol>
          {/* <li>{inputList}</li> */}
            {items.map((item)=>{
              return <li>{item}</li>
            })}
        </ol>
        </div>
      </div>
    </React.Fragment>
  )
}

export default App;