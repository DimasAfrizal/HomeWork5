import React from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const Profile = ({ fetchUserData, user }) => {
    const warningStyle = {
        margin: '10px 0px 10px 0px',
        textDecoration: "none",
        color: 'red'
      };
    return (
        <div className="profile">
            <h3 style={warningStyle}>Make sure u press GET USER DATA button before SUBMIT</h3>
            <Button size="small" color='primary' variant='contained' onClick={fetchUserData}>GET USER DATA</Button>
            {user.user_id !== undefined && <Typography>Logged in as: {user.displayName}</Typography>}
        </div>
    )
}

export default Profile;