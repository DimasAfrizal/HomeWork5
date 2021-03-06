import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Alist = ({ 
    handleAddPlaylistOnChange, 
    handleAddPlaylistOnSubmit, 
    addPlaylistData
    }) => {

    const submitMessage= () => {
        alert('Your Playlist Added');
    }

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
                <Button size="small" color='primary' variant='contained'type="submit" value="Submit" onClick={submitMessage}>Submit</Button>
                
            </form>
        </div>
    )
}

export default Alist;