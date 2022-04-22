import React, { useState, useEffect } from "react";
import axios from "axios";
import Playlist from "../../Component/Tracks/index";
import Alist from "../../Component/Alist/index";
import Profile from "../../Component/Profile/index";
import { useSelector } from "react-redux";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function Search() {
  const accessToken = useSelector((state) => state.accessToken.value);
  const [combinedTracks, setCombinedTracks] = useState([]);
  
  //Query
  const [query, setQuery] = useState("");
  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };
  //get data from api
  const [data, setData] = useState([]);
  const getTracks = async (accessToken) => {
    const data = await axios
      .get(
        `https://api.spotify.com/v1/search?q=${query}&type=track&access_token=${accessToken}`
      )
      .then((response) => response)
      .catch((error) => error)
    setData(data.data.tracks.items);
    console.log(data);
  };
  //get profile or user id
  const [user, setUser] = useState({
    displayName: '',
    imagesUrl: '',
    user_id: undefined
  });
  const fetchUserData = async () => {
    const data = await axios
      .get(
        `https://api.spotify.com/v1/me?access_token=${accessToken}`
      )
      .catch((error) => error)
    setUser({ ...user, displayName: data.data.display_name, imagesUrl: data.data.images[0].url, user_id: data.data.id })
    console.log(data);
  }

  const [selectedTrack, setSelectedTrack] = useState([]);
  const handleSelectedTrack = (uri) => {
    const alreadySelected = selectedTrack.find(selectedTrack => selectedTrack === uri);
    if (alreadySelected) {
      setSelectedTrack(selectedTrack.filter(selectedTrack => selectedTrack !== uri));
    }
    else {
      setSelectedTrack([...selectedTrack, uri]);
    }
    console.log(selectedTrack);
    console.log(uri);
  }

  

  useEffect(() => {
    const combinedTracksWithSelectedTrack = data.map((track) => ({
      ...track,
      isSelected: selectedTrack.find(selectedTrack => selectedTrack === track.uri),
    }));
    setCombinedTracks(combinedTracksWithSelectedTrack);
  }, [selectedTrack, data]);


  const [addPlaylistData, setAddPlaylistData] = useState({
    title: '',
    description: '',
  })
  const bodyParams = {
    name: addPlaylistData.title,
    description: addPlaylistData.description,
    collaborative: false,
    public: false
  }

  const header = {
    Authorization: `Bearer ${accessToken}`
  }
  const itemParams = {
    uris: selectedTrack
  }
  const handleAddItemToPlaylist = async (id) => {
    const data = await axios
        .post(
            `https://api.spotify.com/v1/playlists/${id}/tracks`, itemParams,
            {
                headers: header
            }
        )
        .catch((error) => error)
    console.log(data);
  }

  const handleAddPlaylistOnChange = e => {
    const { name, value } = e.target;
    setAddPlaylistData({ ...addPlaylistData, [name]: value })
  }
  const handleAddPlaylistOnSubmit = async e => {
    e.preventDefault();
    console.log(addPlaylistData);
    await axios
        .post(
            `https://api.spotify.com/v1/users/${user.user_id}/playlists`, bodyParams,
            {
                headers: header
            }
        )
        .then((response) => (
            handleAddItemToPlaylist(response.data.id)))
        .catch((error) => error)
  }


  //------------------------------------------------------------------------------------------------

  return (
    <div>
      <div data-testid="profileChecker">
        <Profile
          fetchUserData={fetchUserData}
          user={user}
        />
      </div>
      <div data-testid="createListChecker">
        <Alist 
          handleAddPlaylistOnChange={handleAddPlaylistOnChange}
          handleAddPlaylistOnSubmit={handleAddPlaylistOnSubmit}
          addPlaylistData={addPlaylistData}
        />
      </div>
      <div data-testid="searchBarChecker">
        <div className="searchBar">
          <TextField id="keyword" size="small" label="Search" variant="outlined" onChange={handleOnChange}/>
          <Button color='primary' variant='contained' id='btnSearch'onClick={() => { getTracks(accessToken) }} size="small">Search</Button>
        </div>
      </div>
      <div data-testid="playlistChecker">
        {combinedTracks !== undefined && (
          <Playlist combinedTracks={combinedTracks} handleSelectedTrack={handleSelectedTrack} />
        )}
      </div>
    </div>
  );



}

export default Search;