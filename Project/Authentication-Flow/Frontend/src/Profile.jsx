

// src/Profile.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('http://localhost:5000/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfileData(response.data);
      } catch (error) {
        console.log('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  if (!profileData) return <p>Loading...</p>;

  return <div>{profileData.message}</div>;
}

export default Profile;
