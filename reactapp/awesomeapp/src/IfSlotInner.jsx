import React from 'react'

function IfSlotInner(props){

    return(
        <React.Fragment>
            <div className='slot_inner'>
            <h1>
            {props.x} {props.y} {props.z}
            </h1>
            <h1>This is Matching</h1>
            <hr/>
            </div>
        </React.Fragment>
        )
}

export default IfSlotInner;