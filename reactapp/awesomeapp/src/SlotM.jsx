import React from 'react'
import IfSlotInner from './IfSlotInner';
import ElseSlotInner from './ElseSlotInner';


function SlotM(props){
    let x= props.x;
    let y= props.y;
    let z= props.z;

    if(x===y && y===z){
        return(<IfSlotInner x={x} y={y} z={z}/>)
    }
    else{
        return(<ElseSlotInner x={x} y={y} z={z}/>)
    }

}

export default SlotM;