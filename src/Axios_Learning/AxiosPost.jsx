import axios from 'axios';
import React, { useState } from 'react'

const AxiosPost = () => {

    const data={
        fname:"",
        lastName:"",
    }
    const [inputdata,setInputData]=useState(data);
    const handleData=(e)=>{
        setInputData({...inputdata,[e.target.name]:e.target.values})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users",inputdata)
        .then((response)=>{
            console.log(response)
        })
    }
  return (
    <div>AxiosPost\\
    <br/>
    <br/>
    <label>Frist name</label>
    <input type='text' name='fname'
    value={inputdata.fname}
    onChange={handleData}
    ></input><br/>
    <label>last  name</label>
    <input type='text' name='lastName'
    
    value={inputdata.lastName}
    onChange={handleData}
    ></input><br/>
    <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default AxiosPost