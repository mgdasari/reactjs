import React, { useState } from "react";

const App = () => {
  const [fullname, setFullName] = useState({ fname: "", lname: "" });

  const inputFunction = (event) => {
    //console.log(event.target.value);
    //console.log(event.target.name);
    const value = event.target.value;
    //const name = event.target.name;
    setFullName((preValue)=>{
        if(event.target.name === 'fName'){
            return({
                fname: value, lname: preValue.lname
            })
        }else if(event.target.name === 'lName'){
            return({
                fname: preValue.lname, lname: value
            })
        }

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
          Hello!! {fullname.fname} {fullname.lname}
        </h1>
        <input
          type="text"
          placeholder="Enter your name"
          className="textField"
          onChange={inputFunction}
        //   value={fullname.fname}
          name="fName"
        />
        <br />
        <input
          type="text"
          placeholder="Enter Your LName"
          className="textField"
          onChange={inputFunction}
        //   value={fullname.lname}
          name="lName"
        />
        <button type="submit">submit me </button>
      </form>
    </React.Fragment>
  );
};

export default App;
