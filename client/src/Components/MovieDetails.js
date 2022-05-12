import React from 'react'
import  {useState, useEffect}  from 'react';
import axios from 'axios';
import { id } from 'date-fns/locale';
import styled from "styled-components";

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
 
 

  return (
     <Container>
      <Background>
        <img alt={banner} src={banner}/>
      </Background>

      <ImageTitle>
        <img alt={photo} src={photo} />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/ticket.svg" alt="" />
            <span>Book Now</span>
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
        </Controls>
        <SubTitle>{name}</SubTitle>
        <Description>{description}</Description>
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
