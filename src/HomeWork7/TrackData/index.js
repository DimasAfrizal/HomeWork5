const Tracks = (props) => {
    return(
        <div>
            <img src={props.cover} id='Cover'></img>
            <p id='Title'>{props.judul}</p>
            <p id='Artis'>{props.artis}</p>
        </div>
    );
};

export default Tracks;