import React from "react";
import Tracks from "./container";


const Playlist = ({combinedTracks, handleSelectedTrack}) => {

    const Loop = combinedTracks.map((item) => {
        const {uri} = item;
        return (
            <div id="card">
                <Tracks  key={uri} track={item} handleSelectedTrack={handleSelectedTrack}/>
            </div> 
            
        )
    })
    return(
        <div id='listOT'>{Loop}</div>
    )
};

export default Playlist;
