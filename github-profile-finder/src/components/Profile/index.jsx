// CSS
import styles from "./Profile.module.css";
// Hooks
import { useEffect, useState } from "react";

// Icons
import { BsFillGeoAltFill, BsEnvelopeFill, BsGithub } from "react-icons/bs";

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
      if (profileDataFetch) {
        setProfileData(profileDataFetch);
      }
    };
    getProfile(githubURL);
  }, [githubURL]);

  return (
    <>
      <div id={styles.github_profile}>
        {userName.length > 0 && !profileData.message ? (
          <>
            <img src={profileData.avatar_url} alt={profileData.name} />
            <p className={styles.profile_name}>{profileData.name}</p>
            <p className={styles.profile_login}>{profileData.login}</p>
            <p className={styles.profile_bio}>
              {profileData.bio || "Não informado"}
            </p>
            <p className={styles.profile_location}>
              <BsFillGeoAltFill />
              {profileData.location || "Não informado"}
            </p>
            <p className={styles.profile_email}>
              <BsEnvelopeFill />
              {profileData.email || "Não informado"}
            </p>
            <p className={styles.profile_link}>
              <BsGithub />
              <a
                href={profileData.html_url}
                target="_blank"
                className={styles.profile_url}
              >
                Acessar perfil
              </a>
            </p>
          </>
        ) : (
          <>
            {profileData && userName.length > 0 && (
              <p>Usuário não encontrado!</p>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Profile;
