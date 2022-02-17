import React from 'react';
import "./Body.css";
import Header from './Header';
import { useStateProviderValue } from './StateProvider';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'; 
import SongRow from './SongRow';

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useStateProviderValue();  //pulling

  return (
    <div className='body'>
      <Header spotify={spotify} />
      <div className='body__info'>
       <img src={discover_weekly?.images[0].url} />

       <div className='body__infoText'>
         <strong>Playlist</strong>
         <h2>Discover weekly</h2>
         <p>{discover_weekly?.description}</p>
       </div>
       </div>
       <div className='body__songs'>
         <div className='body__icons'>
           <PlayCircleFilledIcon className='body__shuffle'/>
           <FavoriteIcon fontSize="large"/>
           <MoreHorizIcon />
         </div>
          {discover_weekly?.tracks.items.map((item)=> (
           <SongRow track={item.track} />
          ))}
      </div>
    </div>
  )
}

export default Body;
//"https://research.atspotify.com/wp-content/uploads/sites/3/2018/07/Discover-Weekly-thumb.png"