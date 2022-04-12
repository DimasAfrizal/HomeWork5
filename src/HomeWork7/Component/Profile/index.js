import React from 'react';
const Profile = ({ fetchUserData, user }) => {
    return (
        <div className="profile">
            <button id="btnGetUser" onClick={fetchUserData}>GET USER DATA</button>
            {user.user_id !== undefined && <p>Logged in as: {user.displayName}</p>}
        </div>
    )
}

export default Profile;