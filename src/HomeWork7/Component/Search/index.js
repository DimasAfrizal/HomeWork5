import React, { useState } from "react";
import axios from "axios";
import Playlist from "../Playlist";

function Search({accessToken}) {
    const [data, setTrackData] = useState();
    const [query, setQuery] = useState("");
    
    
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

    const handleOnChange = (e) => {
      setQuery(e.target.value);
    };

      return (
        <div>
          <input onChange={handleOnChange}
          />
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