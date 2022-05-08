import axios from 'axios';
import React from 'react'
import {useState} from 'react'

import { useHistory } from "react-router-dom";

export default function AddMovies() {
    
 
     const history = useHistory();
    
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [showTime, setShowTime] = useState();
    const [theaters,setTheaters] = useState([]);
    const [photo,setPhoto] = useState([]);
    const [loading, setLoading] = useState(false);


     //image upload start
    const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "Chat-app");
    setLoading(true);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/donfmtaf4/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setPhoto(file.secure_url);
  };
   
    const currentCheck = [];

     const handleCheckBox = (e,index)=>{
         
        const currentCheck = theaters;
        currentCheck[index] = e.target.value;
        //console.log(currentCheck);
        setTheaters(currentCheck);
        
        console.log(theaters);

     }
     
    function submitData(e){

        e.preventDefault();
        
        const data = {

            name,
            description,
            showTime,
            theaters,
            photo  
            
        }

        axios.post('http://localhost:8000/movies/addMovies',data).then(() => {

            alert("Movie is added successfully");
            history.push('/displayMovie');
            // e.target.reset(); 
             
      })
      .catch((err) => {
        alert(err);
      });
    }


  return (
    <div>

        <center>
            <h2 className='mb-5 mt-5'>Add Item</h2>
            <div className='border' style={{width:"450px",height:"650px"}}   >
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
                        <input type="time"  style={{width:"300px"}} className="form-control" 
                               onChange={e=>{setShowTime(e.target.value)}}
                        />
                    </div>


                  <div class="form-check">
                  <input  type="checkbox"  value="SKyLite" id="flexCheckDefault"
                   onChange={(e) => handleCheckBox(e,0)} />
                  <label class="form-check-label" for="flexCheckDefault">
                  SKyLite
                  </label>
                  </div>

                   <div class="form-check">
                   <input  type="checkbox" value="NewCinema" id="flexCheckChecked" 
                    onChange={(e) => handleCheckBox(e,1)} />
                   <label class="form-check-label" for="flexCheckChecked">
                   NewCinema
                   </label>
                   </div>

                    <div class="form-check">
                  <input  type="checkbox"  value="Savoy" id="flexCheckDefault"
                   onChange={(e) => handleCheckBox(e,2)} />
                  <label class="form-check-label" for="flexCheckDefault">
                   Savoy
                  </label>
                  </div>

                   <div class="form-check">
                   <input  type="checkbox" value="Liberty" id="flexCheckChecked" 
                    onChange={(e) => handleCheckBox(e,3)} />
                   <label class="form-check-label" for="flexCheckChecked">
                    Liberty
                   </label>
                   </div>

                   <div class="form-check">
                   <input  type="checkbox" value="Cinemax" id="flexCheckChecked" 
                    onChange={(e) => handleCheckBox(e,4)} />
                   <label class="form-check-label" for="flexCheckChecked">
                    Cinemax
                   </label>
                   </div>

                   <div className="col-md-3 mb-3 mt-5">
                   <label htmlFor="photo" className="form-label">
                     Photo
                    </label>
                   <input
                 style={{width:"300px"}}
                  type="file"
                 required
                 accept="image/png, image/jpeg"
                id="image"
                 onChange={uploadImage}
                 />

          {loading ? (
            <img
              className="img-thumbnail"
              width="150px"
              required
              height="150px"
              src={photo}
              alt="Loading..."
            />
          ) : (
            <label htmlFor="loading" className="form-label" />
          )}
        </div>

                   




                    <button type="submit" className="btn btn-success mt-5"  >Add Movie</button>
                </form>


            </div>
              

            </center>

    </div>
  )
}
