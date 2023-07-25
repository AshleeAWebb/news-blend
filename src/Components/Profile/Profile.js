import React from 'react';
import profileimage from '../assets/user.png';
import './Profile.css';

const Profile = () => {
  const user = {
    username: 'LeBron James',
    age: 36,
    location: 'Los Angeles, USA',
    occupation: 'NBA Player',
  };

  return (
    <div className="profile-container">
    <div className="profile">
    <img className='profile-image' src={profileimage} alt="User" />
      <h1 className="username">{user.username}</h1>
      <ul className="details">
        <li><span className="label">Age:</span> {user.age}</li>
        <li><span className="label">Location:</span> {user.location}</li>
        <li><span className="label">Occupation:</span> {user.occupation}</li>
      </ul>
    </div>
    </div>
  );
};

export default Profile;
