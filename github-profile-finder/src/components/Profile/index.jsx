// CSS
import styles from "./Profile.module.css";
// Hooks
import { useEffect, useState } from "react";

// Icons
import { BsFillGeoAltFill, BsEnvelopeFill, BsGithub } from "react-icons/bs";

const Profile = ({ userName }) => {
  // GitHub Data
  const [profileData, setProfileData] = useState("");

  // Loading State
  const [loading, setLoading] = useState(false);

  // GitHub URL
  const githubURL = `https://api.github.com/users/${userName}`;

  // GitHub Profile fetch
  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await fetch(githubURL);
        const profileDataFetch = await res.json();
        setProfileData(profileDataFetch);
        setLoading(true);
      } catch (error) {
        setLoading(true);
      }
    };
    getProfile();
  }, [githubURL]);

  return (
    <>
      <div id={styles.github_profile}>
        {profileData && !loading ? (
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
            {userName.length > 0 && loading && <p>Usuário não encontrado!</p>}
          </>
        )}
      </div>
    </>
  );
};

export default Profile;
