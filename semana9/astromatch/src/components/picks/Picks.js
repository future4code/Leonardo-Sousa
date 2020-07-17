import React, { useState , useEffect} from "react";
import styled from "styled-components";
import LikeIcon from '@material-ui/icons/Favorite';
import DeslikeIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const Profile = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const ImgProfile = styled.img`
  width: 95%;
  height: 450px;
  margin: 0 auto;
  border-radius: 3px;
`
const Data = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
`
const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 10%;
  margin: 2px;
`
const Teste = styled.div`
  width: 95%;
  margin: 0 3%;
  position: absolute;
  bottom: 0;
  color: white;
`

function Picks(props) {
  return (
    <Profile>
      <Data>
        <ImgProfile src= {props.profile.photo}/>
        <Teste>
        <span>{props.profile.name}, {props.profile.age}</span>
        <p>{props.profile.bio}</p>
        </Teste>
      </Data>
      <Buttons>
        <IconButton color="primary">
          <DeslikeIcon color="primary" onClick= {props.choosePersonDeslike}>Deslike</DeslikeIcon>
        </IconButton>
        <IconButton color="secondary">
          <LikeIcon color="secondary" onClick= {props.choosePersonLike}>Like</LikeIcon>
        </IconButton>
      </Buttons>
    </Profile>
  );
}

export default Picks;
