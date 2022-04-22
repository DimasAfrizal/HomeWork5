import React from 'react';
import Button from '@mui/material/Button';

const Login =()=>{
    var client_id = process.env.REACT_APP_SPOTIFY_KEY;
    var redirect_uri = 'http://localhost:3000/';
    var scope = 'playlist-modify-private';
    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id||"");
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

    const loginMessage = () => {
        alert('Logined - Click Create Playlist to continue');
    }
    
    return(
        <>
        <a href={url}>
            <Button id="btnLogin" size="small" onClick={loginMessage}>Login</Button>

        </a>
        </>
    )

}

export default Login;

