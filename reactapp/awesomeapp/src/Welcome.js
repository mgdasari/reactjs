import React, { Component } from 'react'

class Welcome extends Component{
    constructor(){
        super();
        this.state={
            message:'Welcome Visitor'
        }
    };
    change() {
        this.setState({
            message:'Thank you for subscribing'
        });
    }
    render(){
        return(<div>
            <h1 className='heading_style'>{this.state.message}</h1>
            <button onClick={()=>this.change()}>Subscribe</button>

        </div>);
    }
}

export default Welcome;