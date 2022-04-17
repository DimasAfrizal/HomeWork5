import React  from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
const Tracks = ({track, handleSelectedTrack}) => {
    
    const { album, name: songName, isSelected, uri} =track;

    return(
        <div>
            <img src={album.images[1].url} id='Cover' alt="This Must Be a Album Cover"></img>
            <Typography id='Title'>{songName}</Typography>
            <Typography id='Artis'>{track.artists[0].name}</Typography>
            <Button id='btnSelect' size="small" onClick={() => handleSelectedTrack(uri)}>{isSelected ? 'Deselect' : 'Select'}</Button>
            <br/>
            <br/>
        </div>
    );
};

export default Tracks;