import React from "react";
import Tracks from "../../TrackData";


const Playlist = ({data}) => {
    const Loop = data.map((item) => {
        return (
            <Tracks cover={item.album.images[1].url} judul={item.name} artis={item.artists[0].name}/>
        )
    })
    return(
        <div >{Loop}</div>
    )
};

export default Playlist;
