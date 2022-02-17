import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useStateProviderValue } from './StateProvider'; 

//resposible for interaction with react app and spotifywebapi.
const spotify = new SpotifyWebApi();

function App() {
  
  const [{ user, token }, dispatch] = useStateProviderValue(); //pulling 

  //1...pulled access token off from url.&.then we striped it
  //2...we store that striped token in the state
  //3...use that to render the next page using jsx
  //4...and then that token is used to connect back to the spotify

  useEffect(() => {
  const hash = getTokenFromUrl();
  window.location.hash = "";
  const _token = hash.access_token;

  if (_token) {

    dispatch ({
      type:"SET_TOKEN",
      token:_token

    })
    spotify.setAccessToken(_token);

    spotify.getMe().then((user) => {
      dispatch({
        type: 'SET_USER',
        user: user, 
      })
    })
  }
    spotify.getUserPlaylists().then((playlists) => {
      dispatch({
        type: 'SET_PLAYLISTS',
        playlists: playlists,
      })
    })
    spotify.getPlaylist('4GpBODwgLjOwL6JcBunQcr').then(response =>{
      dispatch({
        type: 'SET_DISCOVER_WEEKLY',
        discover_weekly: response,
      })
    })
  }, []);
  return (
   <div className="App">
     {
       token ? (
       <Player spotify={spotify}/>
       ) : (
        <Login/>
       )
     }
   
   </div>
  );
}

export default App;
