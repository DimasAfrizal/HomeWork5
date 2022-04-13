import React from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const Profile = ({ fetchUserData, user }) => {
    return (
        <div className="profile">
            <Button id="btnGetUser" size="small" onClick={fetchUserData}>GET USER DATA</Button>
            {user.user_id !== undefined && <Typography>Logged in as: {user.displayName}</Typography>}
        </div>
    )
}

export default Profile;