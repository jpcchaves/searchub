// CSS
import styles from "./Profile.module.css";
// Hooks
import { useEffect, useState } from "react";

// Icons
import { BsFillGeoAltFill, BsEnvelopeFill, BsGithub } from "react-icons/bs";

const Profile = () => {
  // Profile Name
  const [profileName, setProfileName] = useState("");

  // Get profile name to send it to the fetchAPI
  const [userName, setUserName] = useState("");

  console.log(profileName, userName);

  // GitHub Data
  const [profileData, setProfileData] = useState("");

  // Loading State
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // GitHub URL
  const githubURL = `https://api.github.com/users/${userName}`;

  // HandleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // GitHub Profile fetch
  useEffect(() => {
    const getProfile = async () => {
      setLoading(true);
      setError(false);
      try {
        const res = await fetch(githubURL);
        const profileDataFetch = await res.json();

        if (profileDataFetch.message) {
          return () => setError(true);
        }

        setProfileData(profileDataFetch);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    getProfile();
  }, [userName]);

  return (
    <div id={styles.form_wrapper}>
      <form onSubmit={handleSubmit}>
        <h3>Procure seu Perfil no GitHub</h3>
        <label className={styles.label}>
          <span>Digite seu nome de usuário:</span>
          <input
            type="text"
            placeholder="Nome de usuário..."
            onChange={(e) => setProfileName(e.target.value)}
          />
        </label>
        {loading ? (
          <button disabled className={styles.btn}>
            Carregando...
          </button>
        ) : (
          <button
            className={styles.btn}
            onClick={() => setUserName(profileName)}
          >
            Pesquisar
          </button>
        )}
      </form>
      {error && <p>Ocorreu um erro... Tente novamente mais tarde.</p>}
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <>
          {userName !== "" && (
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
          )}
        </>
      )}
    </div>
  );
};

export default Profile;
