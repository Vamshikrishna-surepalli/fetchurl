import React, { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import ReactDOM from 'react-dom/client';

function App() {
  const [arr, setArray] = useState([]);
  const [flag, setFlag] = useState(false);
  const r = [];
  function onSubmit() {
    var input = document.getElementById("user").value;
    let srt = document.getElementById("age").value;
    var srt1 = document.getElementById("birthday").value;
    var srt2 = document.getElementById("male");
    var srt3 = document.getElementById("female");
    var str4 = "";
    if (srt2.checked) {
      str4 = "male";
    } else {
      str4 = "female";
    }
    let obj = {
      name: input,
      birthday: srt1,
      gender: str4,
      age: srt,
    };
    r.push(obj);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*' },
      body: JSON.stringify(obj),
      mode: 'no-cors'
    };
    fetch('http://localhost:8090/createStudent', requestOptions)
        .then(response => response.json())
        .then(data => {console.log("response",data)});
    setArray(r);
    setFlag(true);
  }
  
  useEffect(()=>{
    
  },[])
  
  return (
    <div className="App">
      Name:
      <input type="text" placeholder="name" id="user" />
      <br />
      Age:
      <input type="number" placeholder="age" id="age" />
      <br />
      Date of birthday:
      <input type="date" placeholder="birthday" id="birthday" />
      <br />
      Gender: Male:
      <input name="radio" value="male" id="male" type="radio" />
      Female
      <input name="radio" value="female" id="female" type="radio" />
      <br />
      <input type="submit" onClick={onSubmit} id="demo" />
      <p id="result"></p>
      {flag ? (
        <table id="table">
          <tr>
            <th>Name</th>
            <th>Birthday</th>
            <th>DOB</th>
            <th>Gender</th>
          </tr>
          {arr?.map((a, i) => {
            return (
              <tr key={i}>
                <td>{a.name}</td>
                <td>{a.birthday}</td>
                <td>{a.age}</td>
                <td>{a.gender}</td>
              </tr>
            );
          })}
        </table>
      ) : 
      (
        ""
      )
      }
    </div>
  );
}

export default App;
