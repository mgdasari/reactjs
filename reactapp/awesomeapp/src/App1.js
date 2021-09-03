import React from 'react'
import Heading from './Heading';
import Parag from './Parag';
import OrderList from './OrderList'


function App(){
  return (
    <React.Fragment>
        <Heading/>
        <Parag/>
        <OrderList/>
        <Parag/>
        <Parag/>
    </React.Fragment>
  )
}

export default App;