import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'



let curren=new Date(2021,8,22,20);
let currentTime=curren.getHours()
console.log(currentTime);
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
console.log(currentTime);
console.log(greeting);
ReactDOM.render(
<div>
<h1 className='heading'>Hello Sir, <span style={{color:color}}>{`${greeting} ${currentTime} ${annotation}`}</span></h1>
</div>

,
document.getElementById('root')
)