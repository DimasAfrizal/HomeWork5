import React  from 'react';
const Tracks = ({track, handleSelectedTrack}) => {
    
    const { album, name: songName, isSelected, uri} =track;

    return(
        <div className='listOfTracks'>
            <img src={album.images[1].url} id='Cover' alt="This Must Be a Album Cover"></img>
             <p id='Title'>{songName}</p>
            <p id='Artis'>{track.artists[0].name}</p>
            <button id='btnSelect' onClick={() => handleSelectedTrack(uri)}>{isSelected ? 'Deselect' : 'Select'}</button>
            <br/>
            <br/>
        </div>
    );
};

export default Tracks;