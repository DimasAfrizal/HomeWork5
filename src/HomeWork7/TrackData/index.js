
const Tracks = ({track, onSelectTrack}) => {
    
    const { album, name: songName, isSelected} =track;

    return(
        <div>
            {/* <img src={props.cover} ></img> */}
            <img src={album.images[2].url} id='Cover' alt="This Must Be a Album Cover"></img>
             <p id='Title'>{track.name}</p>{/*or u can do {songName} */}
            <p id='Artis'>{track.artists[0].name}</p>
            {/* <button onClick={selectTrack}>{{buttonSelect}?"Select":"Deselect"}</button> */}
            <button onClick={() => onSelectTrack(track)}>{isSelected ? 'Deselect' : 'Select'}</button>
            <br/>
            <br/>
        </div>
    );
};

export default Tracks;