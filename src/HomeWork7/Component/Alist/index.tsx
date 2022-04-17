import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Alist = ({ 
    handleAddPlaylistOnChange, 
    handleAddPlaylistOnSubmit, 
    addPlaylistData
    }) => {
    return (
        <div className="playlist-form">
            <h2>Create Playlist</h2>
            <form className="addPlaylistForm" onSubmit={handleAddPlaylistOnSubmit}>
                <label htmlFor="title">Title</label><br />
                <TextField label="Your playlist title" variant="filled" size="small" className="title" id="title" type="text" value={addPlaylistData.title} onChange={handleAddPlaylistOnChange} name="title" />
                <br />
                <label htmlFor="description"> Description </label><br />
                <textarea className="description" id="description"  value={addPlaylistData.description} onChange={handleAddPlaylistOnChange} name="description" />
                <br />
                <Button className="selectButton" id='btnSubmit'type="submit" value="Submit" size="small">Submit</Button>
                
            </form>
        </div>
    )
}

export default Alist;