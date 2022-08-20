// CSS
import styles from "./Profile.module.css";

import { useEffect, useState } from "react";

const Profile = ({ userName }) => {
  

  // GitHub Data
  const [profileData, setProfileData] = useState("");

  

  // GitHub URL
  const githubURL = `https://api.github.com/users/${userName}`;

  // GitHub Profile fetch
  useEffect(() => {
    const getProfile = async (url) => {
      const res = await fetch(url);
      const profileDataFetch = await res.json();

      setProfileData(profileDataFetch);
    };
    getProfile(githubURL);
  }, [githubURL]);
  
  return (
    <>
      <div id={styles.github_profile}>
        {userName.length > 0 && (
          <>
            <img src={profileData.avatar_url} alt={profileData.name} />
            <p className={styles.profile_name}>{profileData.name}</p>
            <p className={styles.profile_login}>{profileData.login}</p>
            <p className={styles.profile_bio}>{profileData.bio}</p>
          </>
        )}
      </div>
    </>
  );
};

export default Profile;
