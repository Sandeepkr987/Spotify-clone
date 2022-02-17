import React from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon  from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer__left'>
       <img className='footer__album' src="	https://i.pinimg.com/originals/6f/0e/05/6f0e05acb0424a74273c9f3ac104232b.jpg" alt="" />
       <div className='footer__songInfo'>
         <h4>W.O.W</h4>
         <p>Post Malone</p>
       </div>
        </div>
        <div className='footer__center'>
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon className='font__size' />
        <SkipNextIcon className='footer__icon' />
        <RepeatIcon className='footer__green' />
        </div>
        <div className='footer__right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
        </div>
    </div>
  )
}

export default Footer