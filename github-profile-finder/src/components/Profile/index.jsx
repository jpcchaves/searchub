// CSS
import styles from "./Profile.module.css";
// Hooks
import { useEffect, useState } from "react";

// Icons
import { BsFillGeoAltFill, BsEnvelopeFill, BsGithub } from "react-icons/bs";

const Profile = () => {
  // GitHub Data
  const [profileData, setProfileData] = useState("");

  // Loading State
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // GitHub URL
  const githubURL = `https://api.github.com/users/`;

  // GitHub Profile fetch
  useEffect(() => {
    const getProfile = async () => {
      setLoading(true);
      setError(false);
      try {
        const res = await fetch(githubURL);
        const profileDataFetch = await res.json();
        setProfileData(profileDataFetch);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    getProfile();
  }, []);

  return (
    <>
      <form id={styles.form_wrapper}>
        <h3>Procure seu Perfil no GitHub</h3>
        <label className={styles.label}>
          <span>Digite seu nome de usuário:</span>
          <input type="text" placeholder="Nome de usuário..." />
          <input type="submit" value="Buscar" />
        </label>
      </form>
      <div id={styles.github_profile}>
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
      </div>
    </>
  );
};

export default Profile;
