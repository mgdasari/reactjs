import React from 'react'


function App(){

  let curren=new Date(2021,8,22,20);
let currentTime=curren.getHours()

let greeting=''
let annotation=''
let color=''
if(currentTime >=0 && currentTime <12){
    greeting='Good Morning'
    annotation='am'
    color='blue'
}else if(currentTime >=12 && currentTime<19){
    greeting='Good Afternoon'
    annotation='pm';
    color='yellow'
}else if( currentTime >=19 && currentTime<=24){
    greeting='Good Night'
    annotation='pm';
    color='green'
}


  return(
    <h1 className='heading'>Hello Sir, <span style={{color:color}}>{`${greeting} ${currentTime} ${annotation}`}</span></h1>
  )
}


export default App;
