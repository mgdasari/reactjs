import React from 'react'
import ReactDOM from 'react-dom'
//import './index1.css'

const url1='https://picsum.photos/id/237/1300/600'

// .heading{
//     color: rgb(238 ,125 ,59);
//     text-align: center;
//     text-transform: capitalize;
//     font-size: bold;
//     font-style: oblique;
//     margin: 5px 0px;
//     font-family: 'Josefin Sans', sans-serif;
//   }
  

ReactDOM.render(
    <React.Fragment>

    <h1 className='heading' style={{color:rgb(238 ,125 ,59),}}>My name is Brownie..Say Hi 2 Me..Lots of love from me</h1>  
    <div className='image_div'>
    <img src={url1} alt='doggyImage'/>
    </div>
    </React.Fragment>
    
    
    ,document.getElementById('root'));