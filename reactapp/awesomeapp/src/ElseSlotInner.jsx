import React from 'react'

function ElseSlotInner(props){
    return(
        <React.Fragment>
            <div className='slot_inner'>
            <h1>
                {props.x} {props.y} {props.z}
            </h1>
            <h1>This is not Matching</h1>
            <hr/>
            </div>
        </React.Fragment>
    )

}

export default ElseSlotInner;