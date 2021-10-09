import React from 'react'
class App extends React.Component {
  state = { messageDisplayed: false };
  componentDidMount() {
    this.setState({ messageDisplayed: true });
  }
 
  render() {
    console.log("Parent is getting rendered");
    return (
      <div className="App">
        <Message />
      </div>
    );
  }
 }
 
 class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "Hello, this is vivek" };
  }  
  render() {
    console.log("Message is getting rendered");
    return (
      <div>
        <p>{this.state.message}</p>
      </div>
    );
  }
 }
 export default App;