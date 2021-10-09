import React, { useState } from "react";

const App = () => {
  const [fullname, setFullName] = useState({ fname: "", lname: "",gmail:'' });

  const inputFunction = (event) => {
    //console.log(event.target.value);
    //console.log(event.target.name);
    const {name,value} = event.target;
    //const name = event.target.name;
    setFullName((preValue)=>{
      console.log(preValue);
      return{
        ...preValue,
        [name]:value,
      }


        // if(event.target.name === 'fName'){
        //     return({
        //         fname: value, lname: preValue.lname,gmail:preValue.gmail
        //     })
        // }else if(event.target.name === 'lName'){
        //     return({
        //         fname: preValue.fname, lname: value,gmail:preValue.gmail
        //     })
        // }else if(event.target.name === 'gmail'){
        //     return({
        //         fname: preValue.fname, lname: preValue.lname,gmail:value
        //     })
        // }

    })
  };

  const onSubmits = (event) => {
    event.preventDefault();
    alert("submitted");
  };
  return (
    <React.Fragment>
      <form onSubmit={onSubmits}>
        <h1 className="heading_style">
          Hello!! {fullname.fname} {fullname.lname} {fullname.gmail}
        </h1>
        <input
          type="text"
          placeholder="Enter your name"
          className="textField"
          onChange={inputFunction}
        //   value={fullname.fname}
          name="fname"
        />
        <br />
        <input
          type="text"
          placeholder="Enter Your LName"
          className="textField"
          onChange={inputFunction}
        //   value={fullname.lname}
          name="lname"
        />
        <br/>
        <input
          type="email"
          placeholder="Enter Your Gmail Id"
          className="textField"
          onChange={inputFunction}
        //   value={fullname.lname}
          name="gmail"
        />
        <button type="submit">submit me </button>
      </form>
    </React.Fragment>
  );
};

export default App;
