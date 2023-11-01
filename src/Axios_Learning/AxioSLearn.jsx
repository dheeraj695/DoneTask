import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxioSLearn = () => {

    const [userdata,setdata]=useState([]);

    useEffect(()=>{

        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response)
            setdata(response.data)
        })
    },[])
  return (
    <div>AxioSLearn
    
    {
        userdata.map((data)=>{
            return(
                <div>
                {data.name}
                 </div>
            )
        })
    }
    </div>
  )
}

export default AxioSLearn