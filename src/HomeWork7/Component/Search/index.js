import React, { useState } from "react";
import axios from "axios";
import Playlist from "../../Playlist";
import Alist from "../../Component/List/index";
import Profile from "../../Component/Profile/index";


function Search({accessToken}) {
    const [data, setTrackData] = useState();
    const [query, setQuery] = useState("");
    const [user, setUser] = useState({
      displayName: '',
      imagesUrl: '',
      user_id: undefined
    })
    
    const getTracks = async (accessToken) => {
        const data = await axios
          .get(
            `https://api.spotify.com/v1/search?q=${query}&type=track&access_token=${accessToken}`
          )
          .then((response) => response)
          .catch((error) => error)
        setTrackData(data.data.tracks.items);
        console.log(data);
      };

    const fetchUserData = async () => {
      const data = await axios
          .get(
              `https://api.spotify.com/v1/me?access_token=${accessToken}`
            )
          .catch((error) => error)
        setUser({ ...user, displayName: data.data.display_name, imagesUrl: data.data.images[0].url, user_id: data.data.id })
        console.log(data);
    }

    



    const handleOnChange = (e) => {
      setQuery(e.target.value);
    };

      return (
        <div>
          <Profile
            fetchUserData={fetchUserData}
            user ={user}
          />
          <input onChange={handleOnChange}/>
          <button onClick={()=>{getTracks(accessToken)}}>
            Search
          </button>

          {data !== undefined && (
                <Playlist data={data}/>
            )

            }

        </div>
      );


    
}

export default Search;