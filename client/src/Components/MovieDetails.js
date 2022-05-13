import React from 'react'
import  {useState, useEffect}  from 'react';
import axios from 'axios';
import { id } from 'date-fns/locale';
import styled from "styled-components";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
// import DatePicker from "react-datepicker";

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

import "react-datepicker/dist/react-datepicker.css";

export default function MovieDetails(props) {
 
  const [movieId,setMovieID] = useState(); 
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [showTime, setShowTime] = useState([]);
  const [theaters,setTheaters] = useState([]);
  const [photo,setPhoto] = useState();
  const [banner,setBanner] = useState();
  const [ticketPrice,setTicketPrice] = useState();
  const [filmType,setFilmType] = useState();
  const [newTime,setNewTime] = useState();
  // const [startDate, setStartDate] = useState(new Date());
const [date, setDate] = useState(new Date());

  const [disable, setDisable] = React.useState(false);

  
  


  useEffect(()=>{
       
      let id =localStorage.getItem('ID');
    
     async function getDetails(){ 
     
    axios.get(`http://localhost:8000/movies/movieDetail/${id}`).then((res)=>{ 

      
      console.log(res.data); 
      setName(res.data.name);
      setDescription(res.data.description);
      setShowTime(res.data.showTime);
      setTheaters(res.data.theaters);
      setPhoto(res.data.photo);
      setBanner(res.data.banner);
      setTicketPrice(res.data.ticketPrice);
      setFilmType(res.data.filmType);

     
    }).catch((err)=>{
        alert(err.message);
    })
  }

  getDetails();
  setMovieID(id);
 
   },[]);
 
  

   const setNewT = (time) =>{
         
     setNewTime(time);
     setDisable(true);

   }

  const handleSelectDateChange = (date) => {
     setDate(date);
  };

  const startDate = new Date();

  function disablePrevDates(startDate) {
    const startSeconds = Date.parse(startDate);
    return (date) => {
      return Date.parse(date) < startSeconds;
    }
  }

    console.log(date);

    //Add To Cart
   const AddToCart = async () =>{

    //  e.preventDefault();

    //  const cart = {
        
    //   movieId,
    //   newTime,
    //   date,
    //   //me tikai ubt cart eke pennann ona tika ganin


    //  }

    }
 

  return (
     <Container>
      <Background>
        <img alt={banner} src={banner}/>
      </Background>

      <ImageTitle>
        <img alt={photo} src={photo} />
      </ImageTitle>
      <ContentMeta>
        <SubTitle>{name}</SubTitle>
        <Description>#{filmType}</Description>
        <Description>{description}</Description>
        <p>
           <Player >
             <StyledLink  role="button"  data-bs-toggle="collapse"  to="#collapseExample" aria-expanded="false" aria-controls="collapseExample" >
            <img src="/images/ticket.svg" alt="" />
            <span>Book Now</span>
            </StyledLink>
            
          </Player>
        </p>
      
        <div class="collapse" id="collapseExample">
               <div class="card card-body">
              <Description>Select Time </Description>
              {showTime.map((time,index)=>( <div key={index}> 
                <Button disabled={disable} className='mt-2 ms-2' variant="outlined" onClick={() => setNewT(time)}>{time}</Button> </div>
              ))}
              <Description>Select Date</Description>

                <div className="col-md-12 mb-4 mx-3 mt-3">
                 <div className="form-group" style={{width:"250px"}}>
                   <LocalizationProvider dateAdapter={AdapterDateFns}>
                     <Stack spacing={3}>
                      <DesktopDatePicker
                        shouldDisableDate={disablePrevDates(startDate)}
                        inputFormat="dd/MM/yyyy"
                        value={date}
                        required
                        onChange={handleSelectDateChange}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Stack>
                  </LocalizationProvider>
                </div>
                </div>
                <Description>Ticket Price</Description>
                Rs.{ticketPrice}

                <hr/>
                <center>
                <Button variant="outlined" color="success" size='large' onClick={()=>AddToCart()} style={{width:"200px"}} >
                 Add To Cart
                 </Button>
                 </center>

            </div>
         </div> 

        {/* <Controls>
          <Player >
             <Link to={`/display`}  >
            <img src="/images/ticket.svg" alt="" />
            <span>Book Now</span>
            </Link>
            
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <div>
              <img src="/images/group-icon.png" alt="" />
            </div>
          </GroupWatch>
        </Controls> */}
        
      </ContentMeta>
    </Container> 
  )
}

const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  left:0px;
  opacity: 0.9;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;

  img {
    width: 100vw;
    height: 71vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    border-radius: 25px;
    width: 35vw;
    height:25vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;

const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }

    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;

  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;

    img {
      width: 100%;
    }
  }
`;

const SubTitle = styled.div`
  color: #00004d;
  font-size: 30px;
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`

  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: #00004d;
font-weight: thicker;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

