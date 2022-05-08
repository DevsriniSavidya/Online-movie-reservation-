import axios from 'axios';
import React from 'react'
import {useState} from 'react'

//import { useHistory } from "react-router-dom";

export default function AddMovies() {
    
 
    // const history = useHistory();
    
    const [name, setName] = useState();
    const [description, setDescription] = useState();
     const [showTime, setShowTime] = useState();
    const [cast,setCast] = useState(new Array(2));
    //  const [check1, setCheck1] = useState();
    //  const [check2, setCheck2] = useState();
      
//    let type = [];
//    type = [check1,check2];

//    console.log(type);
//    //setCast(type);


     
    function submitData(e){

    

        e.preventDefault();
        
        const data = {

            name,
            description,
            showTime,
            cast
            
            
            
        }

        axios.post('http://localhost:8000/movies/addMovies',data).then(() => {

            alert("Movie is added successfully");
             e.target.reset(); // to clear input field after the submission
      })
      .catch((err) => {
        alert(err);
      });
    }


  return (
    <div>

        <center>
            <h2 className='mb-5 mt-5'>Add Item</h2>
            <div className='border' style={{width:"350px",height:"550px"}}   >
                <form onSubmit={submitData}  >

                     <div className='mb-3 mt-5 ' >
                        <label> Movie Name</label>
                        <input type="text"  style={{width:"300px"}} className="form-control"
                               onChange={e=>{

                                   setName(e.target.value);

                               }}

                        />

                    </div>
                    <div className="mb-3 ml-10">
                       <label> Movie Description</label>
                        <input type="text"  style={{width:"300px"}} className="form-control" 
                               onChange={e=>{

                                   setDescription(e.target.value);

                               }}
                        />
                    </div>

                      <div className="mb-3 ml-10">
                       <label> Show Time</label>
                        <input type="number"  style={{width:"300px"}} className="form-control" 
                               onChange={e=>{

                                   setShowTime(e.target.value);

                               }}
                        />
                    </div>

                          <div class="form-check">
                          <input style={{width:"300px"}} 
                
                          type="checkbox" 
                          value="SKyLite" 
                          id="flexCheckDefault"
                          onChange={e=>{

                                   setCast(e.target.value);

                               }}
                          
                          
                          />
                          <label class="form-check-label" for="flexCheckDefault">
                           SKyLite
                           </label>
                   </div>
                  <div class="form-check">
                  <input style={{width:"300px"}} type="checkbox" value="NewCinema" id="flexCheckChecked" 
                  onChange={e=>{

                                   setCast(e.target.value);

                               }}
                    
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                         NewCinema
                  </label>
                  </div>

                    <button type="submit" className="btn btn-success"  >Add Item</button>
                </form>


            </div>
              

            </center>

    </div>
  )
}
