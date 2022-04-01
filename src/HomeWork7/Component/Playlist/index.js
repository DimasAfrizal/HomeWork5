import React, { useState, useEffect } from "react";
import Tracks from "../../TrackData";


const Playlist = ({data}) => {

    const [selectedTrack, setSelectedTrack] = useState([]);
    const [combinedTracks, setCombinedTracks] = useState([]);

    const handleSelectedTrack=(track)=>{
        const alreadySelected = selectedTrack.find((v) => v.id === track.id);
        if(alreadySelected){
            setSelectedTrack(selectedTrack.filter((v) => v.id !== track.id));
        }
        else{
            setSelectedTrack([...selectedTrack, track]);
        }
        console.log(selectedTrack);
    }

    useEffect(() => {
        const combinedTracksWithSelectedTrack = data.map((track) => ({
          ...track,
          isSelected: selectedTrack.find((v) => v.id === track.id),
        }));
        setCombinedTracks(combinedTracksWithSelectedTrack);
      }, [selectedTrack, data]);

    const Loop = data.map((item) => {
        return (
            <Tracks  key={item.id} track={item} onSelectTrack={handleSelectedTrack}/>
        )
    })
    return(
        <div >{Loop}</div>
    )
};

export default Playlist;
