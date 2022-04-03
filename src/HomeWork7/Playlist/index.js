import React, { useState, useEffect } from "react";
import Tracks from "../Component/TrackData";


const Playlist = ({data}) => {

    const [selectedTrack, setSelectedTrack] = useState([]);
    const [combinedTracks, setCombinedTracks] = useState([]);

    const handleSelectedTrack=(uri)=>{
        const alreadySelected = selectedTrack.find(selectedTrack => selectedTrack === uri);
        if(alreadySelected){
            setSelectedTrack(selectedTrack.filter(selectedTrack => selectedTrack !== uri));
        }
        else{
            setSelectedTrack([...selectedTrack, uri]);
        }
        console.log(selectedTrack);
    }

    useEffect(() => {
        const combinedTracksWithSelectedTrack = data.map((track) => ({
          ...track,
          isSelected: selectedTrack.find(selectedTrack => selectedTrack === track.uri),
        }));
        setCombinedTracks(combinedTracksWithSelectedTrack);
      }, [selectedTrack, data]);

    const Loop = combinedTracks.map((item) => {
        const {uri} = item;
        return (
            <Tracks  key={uri} track={item} onSelectTrack={handleSelectedTrack}/>
        )
    })
    return(
        <div >{Loop}</div>
    )
};

export default Playlist;
