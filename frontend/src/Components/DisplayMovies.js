import axios from 'axios';
import React from 'react'
import {useState,useEffect} from 'react'

export default function DisplayMovies() {

  const [request, setRequest] = useState([]);
  
  
   useEffect(()=>{
       
    axios.get("http://localhost:8000/movies").then((res)=>{

      setRequest(res.data);  
      console.log(res.data);  
     
    }).catch((err)=>{
        alert(err.message);
    })
 
   },[]);


  return (
    <div>
   
   {request.map((data, index) => (

    <div class="d-flex justify-content-around">
  <div key={index} className="card" style={{width : "18rem"}}>
     <img className="card-img-top" src={data.photo} alt="Card image cap"/>
      <h5 className="card-title">{data.name}</h5>
     <div className="card-body">
      <p className="card-text">{data.description}</p>
      <p className="card-text">
          {data.theaters.map((arr,index)=>(
              <div key={index}>
                  {arr}
              </div>
          ))}
    </p>
  </div>
  </div>  
</div>

   ))};

    </div>

  )
}
