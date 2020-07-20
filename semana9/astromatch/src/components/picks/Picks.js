import React, { useState , useEffect} from "react";
import {Profile, ImgProfile, Data, Buttons, Teste} from "./style";
import LikeIcon from '@material-ui/icons/Favorite';
import DeslikeIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

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
        <IconButton color="primary" onClick= {props.choosePersonDeslike}>
          <DeslikeIcon color="primary">Deslike</DeslikeIcon>
        </IconButton>
        <IconButton color="secondary" onClick= {props.choosePersonLike}>
          <LikeIcon color="secondary">Like</LikeIcon>
        </IconButton>
      </Buttons>
    </Profile>
  );
}

export default Picks;
