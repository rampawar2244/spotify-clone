 import { useEffect, useState } from 'react';
import './App.css';
 import Login from './component/Login';
import { getTokenFromUrl } from './component/Spotify';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null)
  // Run code on given based on condition
  useEffect(() =>{
  const hash = getTokenFromUrl();
  window.location.hash = ""; 
  const _token = hash.acces_token;
  if(_token){
    setToken(_token);
    spotify.setAccessToken(_token);
    spotify.getMe().then((user) =>{
      console.log('person', user);
    });
  } 
  console.log(token);
  }, [token]);
  return (
    <div>{ token ? <h1>I am Logged in</h1> : <Login />
    }
    </div>
  );
}

export default App;
